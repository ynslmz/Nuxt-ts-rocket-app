<template>
  <div>
    <h4>Rocket Detail</h4>
    {{ rocketDetail }}
  </div>
</template>

<script>
export default {
  computed: {
    rocketDetail() {
      return this.$store.state.rocket.rocketDetailsList[0];
    },
  },
};
</script>

<style>
</style>
