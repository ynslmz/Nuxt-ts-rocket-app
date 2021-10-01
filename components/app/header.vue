<template>
  <header>
    <NuxtLink to="/">
      <h1>{{ appName }}</h1>
    </NuxtLink>
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
