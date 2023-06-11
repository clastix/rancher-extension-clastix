<script>
export default {
  props: {
    url: String,
  },
  data() {
    return {
      computedUrl: `https://${this.url}/ui`,
    };
  },
};
</script>

<template>
  <div>
    <h3>Kamaji Console</h3>
    <p>Open the <a :href="computedUrl" target="_blank">Kamaji Console</a></p>
  </div>
</template>

<style lang="scss" scoped></style>
