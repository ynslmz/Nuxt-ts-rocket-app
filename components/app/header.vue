<template>
  <header>
    <h1>{{ appName }}</h1>
  </header>
</template>

<script>
export default {
  computed: {
    appName() {
      return this.$store.state.appName;
    },
  },
};
</script>

<style>
</style>
