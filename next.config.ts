import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "i.pinimg.com",
              port: "",
              pathname: "/**",
          },
          {
              protocol: "https",
              hostname: "images.pexels.com",
              port: "",
              pathname: "/**",
          },
      ],
  }
};

export default nextConfig;
