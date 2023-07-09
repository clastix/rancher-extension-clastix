<script>
import { mapGetters } from "vuex";
import { allHash } from "@shell/utils/promise";
import ResourceFetch from "@shell/mixins/resource-fetch";
import { SERVICE } from "@shell/config/types";

export default {
  async fetch() {
    const hash = [this.$fetchType(SERVICE)];
    await allHash(hash);
  },
  mixins: [ResourceFetch],
  data() {
    return {
      console: false,
    };
  },

  computed: {
    ...mapGetters(["currentCluster", "currentProduct"]),
    ...mapGetters({ allRepos: "catalog/repos" }),

    certManagerInstalled() {
      return !!this.$store.getters[`${this.currentProduct.inStore}/schemaFor`](
        "cert-manager.io.certificate"
      );
    },

    kamajiInstalled() {
      return !!this.$store.getters[`${this.currentProduct.inStore}/schemaFor`](
        "kamaji.clastix.io.tenantcontrolplane"
      );
    },
  },
};
</script>

<template>
  <div class="main">
    <h2>Kamaji and Kamaji Console are not installed</h2>
    <p>
      Please complete the installation process
      <a href="https://kamaji.clastix.io/" target="_blank">
        following this guide </a
      >.
    </p>

    <div class="install-checks">
      <div>
        <input
          type="checkbox"
          id="cert-manager"
          v-model="certManagerInstalled"
          disabled
        />
        <label for="cert-manager">cert-manager</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="cert-manager"
          v-model="kamajiInstalled"
          disabled
        />
        <label for="cert-manager">kamaji</label>
      </div>
      <div>
        <input type="checkbox" id="cert-manager" v-model="console" disabled />
        <label for="cert-manager">kamaji console</label>
      </div>
    </div>
  </div>
</template>

<style>
pre {
  text-align: left;
}
.main {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}

.install-checks {
  margin: 20px auto;
  gap: 20px;
  font-size: medium;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
