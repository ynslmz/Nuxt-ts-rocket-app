<template>
  <div>
    <div class="header">
      <h4>Rocket List</h4>
      <home-rocket-list-order-select />
    </div>
    <home-rocket-list-item
      v-for="rocket in rocketList"
      :key="rocket.flight_number"
      :rocket-info="rocket"
    />
  </div>
</template>

<script>
export default {
  computed: {
    rocketList() {
      return this.$store.state.home.rocketList;
    },
  },
  mounted() {
    this.$store.dispatch("home/getLatestRocketList");
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>
