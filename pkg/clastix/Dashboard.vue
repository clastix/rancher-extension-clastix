<script>
export default {
  name: "Dashboard",

  layout: "plain",
};
</script>
<template>
  <iframe
  class="frame"
    height="100%"
    width="100%"
    src="https://kamaji.labs.clastix.io:9443/ui/dashboard/tcps?filter="
    sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-same-origin
                 allow-forms"
  >
    <h1>Test</h1>
  </iframe>
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
