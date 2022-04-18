<template>
  <div class="cards">
    <div class="card" v-for="stock in stockList" :key="stock.rowId">
      <div class="stock-name">
        <p>{{ stock.symbolName }}</p>
      </div>
      <div class="id">
        <p>{{ stock.symbol }}</p>
      </div>
      <div class="price">
        <p>{{ stock.previousClose }}</p>
      </div>
      <button class="btn">下單</button>
    </div>
  </div>
</template>

<script>
import getStocks from "../composables/getStocks";

export default {
  setup() {
    const { stockList, getStockList } = getStocks();

    getStockList();

    return { stockList };
  },
};
</script>

<style>
</style>