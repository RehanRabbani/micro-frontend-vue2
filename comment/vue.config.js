const { defineConfig } = require("@vue/cli-service");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8082",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "body",
        filename: "remoteEntry.js",
        library: { type: "var", name: "body" },
        exposes: {
          "./CommentsSection": "./src/components/CommentsSection.vue",
          "./storeComment": "./src/store/comments.js",
        },
        shared: {
          vue: { eager: true, singleton: false },
        },
      }),
    ],
  },
  devServer: {
    port: 8082,
    historyApiFallback: true,
  },
});
