<template>
  <div class="navbar">
    <div class="menu">
      <i class="fas fa-bars"></i>
    </div>
    <div class="title">
      <h1>Stock Market</h1>
    </div>
  </div>
  <div class="links">
    <router-link to="/">上市</router-link>
    <router-link :to="{ name: 'OtcCard' }">上櫃</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--primary);
}
</style>