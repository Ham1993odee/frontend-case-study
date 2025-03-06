const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || [];
    
    config.plugins.push(
      new NextFederationPlugin({
        name: "basketRemote",
        filename: "remoteEntry.js",
        exposes: {
          "./Basket": "./src/components/Basket.tsx",
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