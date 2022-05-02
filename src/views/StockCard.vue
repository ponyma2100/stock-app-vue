<template>
  <Navbar />
  <div class="cards">
    {{ stockList[0] }}
    <SingleCard :stockList="stockList" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import getStocks from "../composables/getStocks";
import SingleCard from "../components/SingleCard.vue";

export default {
  components: { SingleCard, Navbar },
  setup() {
    const { stockList, getStockList } = getStocks();

    getStockList();

    return { stockList };
  },
};
</script>
