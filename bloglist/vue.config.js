const { defineConfig } = require("@vue/cli-service");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8080/",

  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "blogList",
        filename: "remoteEntry.js",
        exposes: {
          "./ListPage": "./src/components/ListPage.vue",
          "./RestrauntDetail": "./src/components/Detail.vue",
          "./store": "./src/store/blog.js",
        },

        shared: {
          vue: { eager: true, singleton: false },
        },
      }),
    ],
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
});
