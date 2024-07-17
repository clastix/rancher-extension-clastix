import { CLASTIX_PRODUCT_NAME, CLASTIX_DASHBOARD } from './types';

const clastixIcon = require('./icon.svg');

export function init($plugin: any, store: any) {
  const {
    product,
    virtualType,
    basicType
  } = $plugin.DSL(
    store,
    CLASTIX_PRODUCT_NAME
  );

  product({
    inStore:             'cluster',
    inExplorer:          true,
    icon:                clastixIcon,
    removeable:          false,
    showNamespaceFilter: true
  });

  virtualType({
    name:       CLASTIX_DASHBOARD,
    namespaced: false,
    weight:     99,
    overview:   true,
    route:      {
      name:   `c-cluster-${ CLASTIX_PRODUCT_NAME }`,
      params: { product: CLASTIX_PRODUCT_NAME },
      meta:   {
        product: CLASTIX_PRODUCT_NAME,
        pkg:     CLASTIX_PRODUCT_NAME
      },
    },
  });

  basicType([CLASTIX_DASHBOARD]);
}
