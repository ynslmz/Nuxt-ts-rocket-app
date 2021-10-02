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
    <div class="page-container-body">
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

<script>
export default {
  mounted() {
    this.$store.dispatch("rocket/getRocketInfo", this.$route.params.id);
  },
  computed: {
    rocketDetail() {
      return this.$store.getters["rocket/getRocketDetail"](
        this.$route.params.id
      );
    },
  },
};
</script>

<style>
.img-thumb {
  width: 100%;
}

</style>
