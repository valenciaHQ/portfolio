import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "valenciahq.com" }],
        destination: "https://www.valenciahq.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
