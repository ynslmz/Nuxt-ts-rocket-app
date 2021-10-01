<template>
  <div class="wrapper">
    <header>
      <h1>{{ appName }}</h1>
    </header>
    <div class="main">
      <Nuxt />
    </div>
    <footer>footer > loading: {{ loading }}</footer>
  </div>
</template>
<script>
export default {
  computed: {
    appName() {
      return this.$store.state.appName;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style>
.wrapper {
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.main {
  padding: 0.5rem 0;
}
</style>
