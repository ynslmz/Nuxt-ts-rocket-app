<template>
  <div v-if="!!rocketDetail">
    <h4 class="rocket-detail-header">
      {{ rocketDetail.company }} - {{ rocketDetail.rocket_name }}
    </h4>
    <div
      class="img-container"
      v-for="img in rocketDetail.flickr_images"
      :key="img"
    >
      <img :src="img" class="img-thumb" />
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
