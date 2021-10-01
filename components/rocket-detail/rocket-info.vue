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
    <pre>
    {{ rocketDetail }}
    </pre>
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
.rocket-detail-header {
  text-align: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
}
.img-container {
  padding: 0.5rem;
  overflow: hidden;
}
.img-thumb {
  width: 100%;
  min-width: 100px;
  max-width: 400px;
}
.img-fullscreen {
  width: 100%;
}
.img-fullscreen::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
