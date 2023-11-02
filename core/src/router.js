// router.js
import Vue from "vue";
import VueRouter from "vue-router";
import BlogEditor from "./components/BlogEditor";
import ListPage from "blogList/ListPage";
// import RestrauntDetail from "blogList/RestrauntDetail";

Vue.use(VueRouter);

const routes = [
  { path: "/restaurant/:id", component: BlogEditor }, // Define your components
  { path: "/", component: ListPage },

  // { path: "/detail/:id", component: RestrauntDetail },
];

const router = new VueRouter({
  mode: "history", // Use history mode for cleaner URLs (requires server configuration)
  routes,
});

export default router;
