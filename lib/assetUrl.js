const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const FOLDER = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || "timi";

/** Cap so we don't request absurd sizes for full-bleed SVGs */
const MAX_SVG_WIDTH = 2560;

/**
 * Resolve a local /assets/... path to a Cloudinary delivery URL.
 *
 * - Raster (png/jpg/…): f_auto + q_auto:good
 * - SVG: f_auto + q_auto:best. Width is ONLY applied when explicitly
 *   passed (or by the next/image loader). Auto-upscaling tall scroll
 *   full-screen SVGs breaks DemiCare's coordinate-based overlays.
 * - Icons stay local.
 *
 * @param {string} src
 * @param {{ quality?: string|number, width?: number, vector?: boolean }} [options]
 *   vector — deliver the original SVG (no f_auto / resize); use for
 *   pixel-accurate scroll/phone chrome assets
 */
export function assetUrl(src, { quality, width, vector } = {}) {
  if (
    !src ||
    !CLOUD_NAME ||
    !src.startsWith("/assets/") ||
    src.startsWith("/assets/icons/")
  ) {
    return src;
  }

  const isSvg = /\.svg$/i.test(src);
  const publicId = src
    .replace(/^\//, "")
    .replace(/\.(svg|png|jpe?g|gif|webp|avif)$/i, "");

  // Scroll/phone overlays need the true SVG viewBox — no rasterization
  if (vector && isSvg) {
    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${FOLDER}/${publicId}`;
  }

  const resolvedQuality =
    quality != null ? quality : isSvg ? "auto:best" : "auto:good";

  const transforms = ["f_auto", `q_${resolvedQuality}`];

  if (width != null) {
    transforms.push(
      `w_${Math.min(Math.round(width), MAX_SVG_WIDTH)}`,
      "c_scale"
    );
  }

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms.join(",")}/${FOLDER}/${publicId}`;
}

/** DemiCare phone / scroll assets — must keep native SVG viewBox coordinates. */
export function demicareAsset(src) {
  return assetUrl(src, { vector: true });
}
