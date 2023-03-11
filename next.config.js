/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  scssOptions: {
    includePaths: [
      path.join(__dirname, "styles")],
      prependDate:`@import "./base.scss";`,
  }
}

module.exports = nextConfig
