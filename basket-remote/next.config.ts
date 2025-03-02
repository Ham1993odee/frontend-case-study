import type { NextConfig } from "next";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
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