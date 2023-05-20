<script>
export default {
  name: "Dashboard",

  layout: "plain",
};
</script>
<template>
  <iframe
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
h1 {
  text-align: center;
}

.clock {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
