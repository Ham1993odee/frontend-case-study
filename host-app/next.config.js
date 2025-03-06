const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || [];

    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        remotes: {
          productsRemote: `productsRemote@${process.env.NEXT_PUBLIC_PRODUCTS_REMOTE_URL || 'http://localhost:3001'}/_next/static/chunks/remoteEntry.js`,
          basketRemote: `basketRemote@${process.env.NEXT_PUBLIC_BASKET_REMOTE_URL || 'http://localhost:3002'}/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        shared: {
          react: { singleton: true, requiredVersion: "^18.0.0" },
          "react-dom": { singleton: true, requiredVersion: "^18.0.0" }
        }
      })
    );

    return config;
  },
};

module.exports = nextConfig;