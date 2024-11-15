import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/layout/layout.vue"),
    children: [
      {
        path: "",
        name: "introduction",
        component: () => import("@/views/introduction/index.vue")
      },
      {
        path: "/posts",
        name: "posts",
        component: () => import("@/views/posts/index.vue")
        // children: [

        // ]
      },
      {
        path: "/:postName",
        name: "post-name",
        component: () => import("@/views/posts/post-id.vue")
      }
    ]
  }
];
const router = createRouter({
  history: createWebHistory(""),
  routes
});

export default router;
