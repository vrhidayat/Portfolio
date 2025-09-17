const isProd = process.env.NODE_ENV === "production";
const isVercel = !!process.env.VERCEL;

const nextConfig = {
    basePath: isProd && !isVercel ? "" : "",
    assetPrefix: isProd && !isVercel ? "" : "",
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
