<template>
  <div class="cards">
    <SingleCard :stockList="stockList" />
  </div>
</template>

<script>
import getStocks from "../composables/getStocks";
import getStock from "../composables/getStock";
import SingleCard from "../components/SingleCard.vue";

export default {
  components: { SingleCard },
  setup() {
    const { stockList, getStockList } = getStocks();
    const { getStockInfo, stockInfo } = getStock();

    getStockList();
    getStockInfo();

    return { stockList, stockInfo };
  },
};
</script>
