<template>
  <div class="stock-container">
    <div class="name">
      <div class="name-group up">
        <h1>{{ stock.symbolName }}</h1>
        <h3>{{ stock.sectorName }}</h3>
      </div>
      <div class="name-group down">
        <h3>{{ stock.symbol }}</h3>
      </div>
    </div>
    <div class="price">
      <h1>{{ stock.price }}</h1>
      <h2><i class="fas fa-sort-up"></i>{{ stock.change }}</h2>
      <h2>{{ stock.changePercent }}</h2>
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
  height: 90%;
  margin-top: 4.5rem;
  color: #d1d4dc;
  background: #1e222d;
  display: flex;
  flex-direction: column;
}

.name {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.name-group,
.price {
  display: flex;
  align-items: center;
  margin: 2px 20px;
}
</style>