import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Step 1 & 2: GitHub Pages export config
  output: 'export',         // required for static export
  distDir: 'dist',
  images:{
    unoptimized: true,
  },      // output directory for GitHub Pages

  // Step 3: SVG loader
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
