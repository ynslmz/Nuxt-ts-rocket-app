<template>
  <div class="wrapper">
    <app-header />
    <div class="main">
      <Nuxt />
    </div>
    <app-footer />
  </div>
</template>

<style>
.wrapper {
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.main {
  padding: 0.5rem 0;
}
</style>
