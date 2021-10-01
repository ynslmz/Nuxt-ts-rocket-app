<template>
  <div class="wrapper">
    <header>
      <h1>SpaceX</h1>
    </header>
    <div class="main">
      <Nuxt />
    </div>
    <footer>footer</footer>
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
