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
  mounted() {
    // const id = params.id; // When calling /abc the slug will be "abc"
    this.$store.dispatch("rocket/getRocketInfo", this.$route.params.id);
    // return { id };
  },
};
</script>

<style>
</style>
