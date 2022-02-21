<template>
  <div class="sort-select-container">
    <select
      title="Sort By Flight Number"
      class="sort-select"
      v-model="key"
      @change="onChange($event)"
    >
      <option value="asc">Flight Number (Asc)</option>
      <option value="desc">Flight Numver (Desc)</option>
    </select>
  </div>
</template>

<script lang="ts">
import { actions } from "../../store/home/actions";
import { moduleName } from "../../store/home/state";
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      key: "",
    };
  },
  fetch() {
    this.key = this.$store.state.home.sortDirection;
  },
  methods: {
    onChange(event: any) {
      this.$store.dispatch(moduleName + actions.changeSort, event.target.value);
    },
  },
});
</script>
<style>
.sort-select-container {
  text-align: right;
}
.sort-select {
  padding: 0.1rem;
  border-radius: 0.25rem;
  border: none;
}
</style>
