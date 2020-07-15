import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/main",
    name: "Main",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Main.vue"),
    redirect: "/center",
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      {
        path: "/center",
        name: "Center",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Center.vue")
      },
      {
        path: "/message",
        name: "Message",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Messages.vue")
      },
      {
        path: "/manage",
        name: "Manage",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Manage.vue")
      },
      {
        path: "/addmarker",
        name: "Addmarker",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Addmarker.vue")
      },
      {
        path: "/todo",
        name: "Todo",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Todo.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
