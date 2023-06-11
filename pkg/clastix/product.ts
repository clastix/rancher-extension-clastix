import { CLASTIX_NAME, CLASTIX_PRODUCT_NAME } from "./types";

const clastixIcon = require("./icon.svg");

export function init($plugin: any, store: any) {
  const { product, virtualType, basicType } = $plugin.DSL(
    store,
    CLASTIX_PRODUCT_NAME
  );

  product({
    inStore: "cluster",
    inExplorer: true,
    icon: clastixIcon,
    removeable: false,
    showNamespaceFilter: true,
  });

  virtualType({
    label: CLASTIX_NAME,
    name: CLASTIX_NAME,
    namespaced: false,
    weight: 99,
    overview: true,
    route: {
      name: `c-cluster-${CLASTIX_NAME}-dashboard`,
    },
  });

  basicType([CLASTIX_NAME]);
}
