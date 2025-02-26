const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "productsRemote",
      filename: "remoteEntry.js",
      exposes: {
        "./Products": "./src/components/Products.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
