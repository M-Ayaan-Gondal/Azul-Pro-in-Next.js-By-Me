import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "searchforfabric.com",
      },
      {
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        hostname: "static.vecteezy.com",
      },
      {
        hostname: "img.freepik.com",
      },
      
      
    ],
  },
};

export default nextConfig;
