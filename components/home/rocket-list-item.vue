<template>
  <NuxtLink
    class="item-container"
    :to="'/rocket-details/' + rocketInfo.rocket.rocket_id"
  >
    <img
      class="img-rocket"
      :src="rocketInfo.links.mission_patch_small"
      :alt="rocketInfo.rocket.rocket_name"
    />
    <div>{{ rocketInfo.mission_name }}</div>
    <div>{{ rocketInfo.rocket.rocket_name }}</div>
    <div>
      {{ new Date(rocketInfo.launch_date_unix * 1000).toLocaleString("en-US") }}
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["rocketInfo"],
};
</script>
