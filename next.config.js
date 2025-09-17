const isProd = process.env.NODE_ENV === "production";
const isVercel = !!process.env.VERCEL;

const nextConfig = {
    basePath: isProd && !isVercel ? "/vrhidayat.github.io" : "",
    assetPrefix: isProd && !isVercel ? "/vrhidayat.github.io/" : "",
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
