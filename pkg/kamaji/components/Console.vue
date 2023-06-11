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
  <iframe
    class="frame"
    height="100%"
    width="100%"
    :src="computedUrl"
    sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-forms"
  ></iframe>
</template>

<style lang="scss" scoped>
.frame {
  border: none;
  margin: 0;
  position: fixed;
  top: 55px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
