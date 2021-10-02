<template>
  <NuxtLink
    class="item-container link"
    :to="'/rocket-details/' + rocketInfo.rocket.rocket_id"
  >
    <div class="img-container">
      <img
        v-if="!!rocketInfo.links.mission_patch"
        class="img-rocket"
        :src="rocketInfo.links.mission_patch_small"
        :alt="rocketInfo.rocket.rocket_name"
      />
      <span v-if="!rocketInfo.links.mission_patch">No Patch</span>
    </div>
    <div class="descriptions">
      <p>{{ rocketInfo.mission_name }}</p>
      <p>{{ rocketInfo.rocket.rocket_name }}</p>
      <p>
        {{
          new Date(rocketInfo.launch_date_unix * 1000).toLocaleString("en-US")
        }}
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["rocketInfo"],
};
</script>
