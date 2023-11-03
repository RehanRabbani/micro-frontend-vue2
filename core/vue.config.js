const { defineConfig } = require("@vue/cli-service");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8081",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    devServer: {
      port: 8081,
      historyApiFallback: true,
    },
    plugins: [
      new ModuleFederationPlugin({
        // name: "core",
        filename: "remoteEntry.js",
        // library: { type: "var", name: "core" },
        remotes: {
          // body: "body@http://localhost:8082/remoteEntry.js",
          blogList: "blogList@http://localhost:8080/remoteEntry.js",
        },

        shared: {
          vue: { eager: true, singleton: false },
        },
      }),
    ],
  },
});
