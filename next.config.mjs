/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['res.cloudinary.com', 'i.scdn.co', 'ht-cdn2.adtng.com', 'ei.phncdn.com', 'pix-ht.trafficjunky.net'],
      loader: 'custom',
      loaderFile: './image-loader.js',
      formats: ['image/webp', 'image/avif'],
    },
  }
  
  export default nextConfig;
  
  