<template>
  <div class="cards">
    <SingleCard :stockList="stockList" />
  </div>
</template>

<script>
import getStocks from "../composables/getStocks";
import SingleCard from "../components/SingleCard.vue";

export default {
  components: { SingleCard },
  setup() {
    const { stockList, getStockList } = getStocks();

    getStockList();

    return { stockList };
  },
};
</script>
