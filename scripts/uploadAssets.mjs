import { v2 as cloudinary } from "cloudinary";
import { readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

// Usage: npm run assets:upload
// Requires NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
// (or a single CLOUDINARY_URL) in .env.
//
// Content images live on Cloudinary only (public/assets keeps icons/).
// Re-run this after restoring files into public/assets (except icons/).

const ASSETS_DIR = join(process.cwd(), "public", "assets");
const FOLDER = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || "timi";
const IMAGE_EXT = /\.(svg|png|jpe?g|gif|webp|avif)$/i;
const CONCURRENCY = 4;

if (!process.env.CLOUDINARY_URL) {
  const { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
  const cloudName =
    process.env.CLOUDINARY_CLOUD_NAME ||
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    console.error(
      "Missing Cloudinary credentials. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET (or CLOUDINARY_URL) in .env"
    );
    process.exit(1);
  }
  cloudinary.config({
    cloud_name: cloudName,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });
}

function collectFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(path));
    } else if (IMAGE_EXT.test(entry.name)) {
      files.push(path);
    }
  }
  return files;
}

// icons/ stays local (see image-loader.js), no point uploading it
const files = collectFiles(ASSETS_DIR).filter(
  (f) => !relative(ASSETS_DIR, f).startsWith(`icons${sep}`)
);

console.log(`Uploading ${files.length} assets to Cloudinary folder "${FOLDER}/assets" ...`);

const failed = [];
let done = 0;

async function uploadFile(file) {
  const rel = relative(join(process.cwd(), "public"), file);
  const publicId = `${FOLDER}/${rel.split(sep).join("/")}`.replace(IMAGE_EXT, "");
  const sizeMB = statSync(file).size / (1024 * 1024);

  try {
    // upload_large chunks big files; plain upload rejects anything over ~20MB
    const uploader =
      sizeMB > 15
        ? (f, o) =>
            new Promise((res, rej) =>
              cloudinary.uploader.upload_large(f, o, (err, r) =>
                err ? rej(err) : res(r)
              )
            )
        : cloudinary.uploader.upload.bind(cloudinary.uploader);

    await uploader(file, {
      public_id: publicId,
      resource_type: "image",
      overwrite: true,
      invalidate: true,
    });
    done += 1;
    console.log(`  ok (${done}/${files.length}) ${rel} (${sizeMB.toFixed(1)}MB)`);
  } catch (err) {
    failed.push({ rel, error: err.message || String(err) });
    console.error(`  FAILED ${rel}: ${err.message || err}`);
  }
}

const queue = [...files];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) await uploadFile(queue.shift());
  })
);

console.log(`\nDone: ${done} uploaded, ${failed.length} failed.`);
if (failed.length) {
  console.log("Failed files:");
  for (const f of failed) console.log(`  - ${f.rel}: ${f.error}`);
  process.exit(1);
}
