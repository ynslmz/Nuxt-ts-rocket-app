<template>
  <div>
    <span
      >Order By Flight Number :
      <select v-model="key" @change="onChange($event)">
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: "",
    };
  },
  fetch() {
    this.key = this.$store.state.home.sortDirection;
  },
  methods: {
    onChange(event) {
      this.$store.dispatch("home/changeSort", event.target.value);
    },
  },
};
</script>

<style>
</style>
