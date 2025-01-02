/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GMAIL_USER: process.env.GMAIL_USER,
        GMAIL_PASS: process.env.GMAIL_PASS,
    },
    output: "standalone",
};

export default nextConfig;
