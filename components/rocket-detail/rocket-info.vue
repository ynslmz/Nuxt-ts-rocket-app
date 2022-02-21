<template>
  <div v-if="!!rocketDetail" class="page-container">
    <div class="page-container-header">
      <h3 class="title">
        {{ rocketDetail.company }} - {{ rocketDetail.rocket_name }}
      </h3>
      <div class="sort-select-container">
        <NuxtLink class="link" to="/">Back</NuxtLink>
      </div>
    </div>
    <div class="page-container-body justify-content-center">
      <div
        class="item-container"
        v-for="img in rocketDetail.flickr_images"
        :key="img"
      >
        <img :src="img" class="img-thumb" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { actions } from "../../store/rocket/actions";
import { getters } from "../../store/rocket/getters";
import { moduleName } from "../../store/rocket/state";
import Vue from "vue";
export default Vue.extend({
  mounted() {
    this.$store.dispatch(
      moduleName + actions.fetchRocketInfo,
      this.$route.params.id
    );
  },
  computed: {
    rocketDetail() {
      return this.$store.getters[moduleName + getters.getRocketDetail](
        this.$route.params.id
      );
    },
  },
});
</script>

<style>
.img-thumb {
  width: 100%;
}

.justify-content-center {
  justify-content: center;
}
</style>
