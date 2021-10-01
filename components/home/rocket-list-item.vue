<template>
  <NuxtLink
    class="item-container"
    :to="'/rocket-details/' + rocketInfo.rocket.rocket_id"
  >
    <div>{{ rocketInfo.mission_name }}</div>
    <div>{{ rocketInfo.rocket.rocket_name }}</div>
    <div>
      <img
        height="48"
        :src="rocketInfo.links.mission_patch_small"
        :alt="rocketInfo.rocket.rocket_name"
      />
    </div>
    <div>{{ rocketInfo.launch_date_unix }}</div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["rocketInfo"],
};
</script>

<style >
.item-container {
  display: flex;
  text-decoration: none;
  color: #222;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
}
.item-container:hover {
  background-color: #ddd;
}
.item-container div {
  width: 100%;
}
</style>
