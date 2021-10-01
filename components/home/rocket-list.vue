<template>
  <div>
    <h4>Rocket List</h4>
    <div class="item" v-for="rocket in rocketList" :key="rocket.flight_number">
      <home-rocket-list-item :rocket-info="rocket" />
    </div>
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
.item {
  margin: 0.5rem 0;
  border-bottom: 1px solid #999;
}
</style>
