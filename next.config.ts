import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[{
      hostname:
        "searchforfabric.com" 
    }]
  }
};

export default nextConfig;
