<template>
  <footer>footer > loading: {{ loading }}</footer>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>
