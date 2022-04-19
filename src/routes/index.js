import VueRouter from "vue-router";

//pages
import Home from "../views/Home";
import Config from "../views/Config";

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  },
  linkActiveClass: "active",
  routes: [
    {
      path: "/pa-igti",
      name: "HomePage",
      component: Home,
    },
    {
      path: "/pa-igti/config",
      name: "ConfigPage",
      component: Config,
    },
  ],
});

export default router;
