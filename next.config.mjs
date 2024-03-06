/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.si.com", "www.thestreet.com"],
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
      // {
      //   protocol: "www.thestreet.com"
        
      // }
    ]
  }
};

export default nextConfig;
