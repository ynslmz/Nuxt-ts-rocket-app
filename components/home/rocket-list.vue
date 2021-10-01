<template>
  <div>
    <h4>Rocket List</h4>
    {{ rocketList }}
  </div>
</template>

<script>
export default {
  computed: {
    rocketList() {
      return this.$store.state.home.rocketList;
    },
  },
};
</script>

<style>
</style>
