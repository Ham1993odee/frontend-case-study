const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || [];
    
    config.plugins.push(
      new NextFederationPlugin({
        name: "productsRemote",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Products": "./src/components/Products.tsx",
        },
        shared: {
          react: { singleton: true, requiredVersion: "^18.0.0" },
          "react-dom": { singleton: true, requiredVersion: "^18.0.0" }
        },
        extraOptions: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;