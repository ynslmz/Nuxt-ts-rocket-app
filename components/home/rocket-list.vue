<template>
  <div class="page-container">
    <div class="page-container-header">
      <h3 class="title">Rocket List</h3>
      <home-rocket-list-sorting-select />
    </div>
    <div class="page-container-body">
      <home-rocket-list-item
        v-for="rocket in rocketList"
        :key="rocket.flight_number"
        :rocket-info="rocket"
      />
    </div>
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
.img-container {
  overflow: hidden;
  text-align: center;
  margin-right: 1rem;
  min-width: 6rem;
}
.img-rocket {
  height: 5rem;
}

.descriptions {
  flex-grow: 1;
  min-width: 250px;
}
</style>
