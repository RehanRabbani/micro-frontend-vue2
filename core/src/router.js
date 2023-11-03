// router.js
import Vue from "vue";
import VueRouter from "vue-router";
import BlogEditor from "./components/BlogEditor";
import ListPage from "blogList/ListPage";
import ResturantRecipes from "comment/ResturantRecipes";
// import RecepieView from "./components/RecepieView";

Vue.use(VueRouter);

const routes = [
  { path: "/restaurant/:id", component: BlogEditor }, // Define your components
  { path: "/", component: ListPage },

  { path: "/recepie/:id", component: ResturantRecipes },
];

const router = new VueRouter({
  mode: "history", // Use history mode for cleaner URLs (requires server configuration)
  routes,
});

export default router;
