import { RouteConfig } from "vue-router";
import Dashboard from "./Dashboard.vue";
import { CLASTIX_NAME } from "./types";

export const routes: RouteConfig[] = [
  {
    name: `c-cluster-${CLASTIX_NAME}-dashboard`,
    path: `/c/:cluster/:product/dashboard`,
    component: Dashboard,
  },
];
