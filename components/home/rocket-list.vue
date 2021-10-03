<template>
  <div class="page-container">
    <div class="page-container-header">
      <h3 class="title">Rocket List</h3>
      <home-rocket-list-sorting-select />
    </div>
    <div class="page-container-body">
      <home-rocket-list-item
        :id="'flight_' + rocket.flight_number"
        v-for="rocket in rocketList"
        :key="rocket.flight_number"
        :rocket-info="rocket"
      />
    </div>
  </div>
</template>

<script>
import { actions } from "../../store/home/actions";
import { getters } from "../../store/home/getters";
import { moduleName } from "../../store/home/state";
export default {
  computed: {
    rocketList() {
      return this.$store.getters[moduleName + getters.getRocketList];
    },
  },
  mounted() {
    this.$store.dispatch(moduleName + actions.fetchLatestLunchEvents);
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
