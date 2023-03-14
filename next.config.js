/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  scssOptions: {
    includePaths: [
      path.join(__dirname, "styles")],
      prependDate:`@import "./src/styles/base.scss";`,
  }
}

module.exports = nextConfig
