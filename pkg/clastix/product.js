import { IPlugin } from "@shell/core/types";
const icon = require("./icon.svg");

export function init($plugin, store) {
  const YOUR_PRODUCT_NAME = "Multitenancy Management";

  const { product, configureType, basicType } = $plugin.DSL(
    store,
    YOUR_PRODUCT_NAME
  );

  product({
    inStore: "management",
    svg: icon,
    label: "Multitenancy Management",
    removable: false,
    showClusterSwitcher: false,
    category: "global",
    to: { name: "clastix", params: { cluster: "local" } },
  });
}
