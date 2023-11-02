import Vue from "vue";
import App from "./App.vue";
import "./main.css";
// import store from "./store/blogEditor";
// import commentStore from "body/storeComment";
// import bus from "./event-bus";
import store from "blogList/store";
import router from "./router";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
  // commentStore,
  // beforeCreate() {
  //   this.bus = bus;
  // },
}).$mount("#app");
