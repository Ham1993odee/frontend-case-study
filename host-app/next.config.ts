import type { NextConfig } from "next";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || [];

    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        remotes: {
          productsRemote: "productsRemote@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          basketRemote: "basketRemote@http://localhost:3002/remoteEntry.js",
        },
        shared: {
          // Share compatible versions of these dependencies
          react: { singleton: true, requiredVersion: "^19.0.0" },
          "react-dom": { singleton: true, requiredVersion: "^19.0.0" }
        },
        extraOptions: {},
      })
    );

    return config;
  },
};

export default nextConfig;
