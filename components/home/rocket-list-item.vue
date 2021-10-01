<template>
  <div class="item-container">
    <div>{{ rocketInfo.rocket.rocket_name }}</div>
    <div>{{ rocketInfo.mission_name }}</div>
    <div>{{ rocketInfo.links.mission_patch_small }}</div>
    <div>{{ rocketInfo.launch_date_unix }}</div>
  </div>
</template>

<script>
export default {
  props: ["rocketInfo"],
};
</script>

<style >
.item-container {
  display: flex;
}
.item-container div {
  width: 100%;
}
</style>
