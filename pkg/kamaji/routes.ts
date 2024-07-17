import { RouteConfig } from 'vue-router';
import Dashboard from './Dashboard.vue';
import { CLASTIX_PRODUCT_NAME } from './types';

export const routes: RouteConfig[] = [
  {
    name:      `c-cluster-${ CLASTIX_PRODUCT_NAME }`,
    path:      `/c/:cluster/${ CLASTIX_PRODUCT_NAME }`,
    meta:       { product: CLASTIX_PRODUCT_NAME, pkg: CLASTIX_PRODUCT_NAME },
    component: Dashboard,
  },
];
