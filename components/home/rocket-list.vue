<template>
  <div>
    <div class="rocket-list-header">
      <h3>Rocket List</h3>
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
      return this.$store.getters["home/getRocketList"];
    },
  },
  mounted() {
    this.$store.dispatch("home/getLatestRocketList");
  },
};
</script>

<style>
.rocket-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
