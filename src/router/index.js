import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReposView from "../views/ReposView.vue";
import SingleReposView from "../views/SingleReposView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/repos",
      name: "repos",
      component: ReposView,
      children: [
        {
          path: "/repos/:id",
          name: "singleRepos",
          component: SingleReposView,
          props: true
        }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFoundView
    }
  ]
});
export default router;
