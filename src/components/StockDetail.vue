<template>
  <div class="stock-container">
    <div class="name">
      <h1>{{ stock.symbolName }}</h1>
    </div>
    <div class="price">
      <h1>{{ stock.price }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],

  setup(props) {},
};
</script>

<style scoped>
.stock-container {
  width: 100%;
  height: 90vh;
  color: #d1d4dc;
  background: #1e222d;
}
</style>