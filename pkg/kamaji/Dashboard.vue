<script>
import { INGRESS } from "@shell/config/types";
import Console from "./components/Console.vue";
import Install from "./components/Install.vue";

export default {
  name: "Dashboard",
  layout: "single",
  async beforeMount() {
    const res = await this.$store.dispatch(`cluster/findMatching`, {
      type: INGRESS,
      selector: "app=kamaji-console",
    });
    const ingress = res[0];
    this.consoleUrl = ingress?.spec.rules[0]?.host;
  },

  components: {
    Console,
    Install,
  },

  data() {
    return {
      consoleUrl: "",
    };
  },
  computed: {
    hasUrl() {
      return !!this.consoleUrl;
    },
  },
};
</script>
<template>
  <Console v-if="hasUrl" :url="consoleUrl" />
  <Install v-else />
</template>
