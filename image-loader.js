import { assetUrl } from "./lib/assetUrl.js";

/**
 * Custom next/image loader.
 * SVGs get q_auto:best and 2× the width Next requests (retina), because
 * Cloudinary rasterizes them — undersized bitmaps look soft when scaled.
 */
export default function cloudinaryLoader({ src, width, quality }) {
  const isSvg = /\.svg$/i.test(src);

  return assetUrl(src, {
    quality:
      quality != null ? quality : isSvg ? "auto:best" : undefined,
    width: isSvg && width ? Math.round(width * 2) : undefined,
  });
}
