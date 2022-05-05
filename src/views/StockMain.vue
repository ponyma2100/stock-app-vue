<template>
  <Navbar />
  <StockDetail :stock="stockInfo" v-if="stockInfo.symbol" />
  <StockDetail :stock="otcInfo" v-if="otcInfo.symbol" />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import StockDetail from "../components/StockDetail.vue";
import getStock from "../composables/getStock";
import getQuote from "../composables/getQuote";
import { useRoute } from "vue-router";

export default {
  components: { StockDetail, Navbar },
  setup(props) {
    const route = useRoute();
    const { getStockInfo, getOtcInfo, stockInfo, otcInfo } = getStock();
    const { getStockTick, stockTick } = getQuote();
    console.log(
      "🚀 ~ file: StockMain.vue ~ line 22 ~ setup ~ route.params",
      route
    );
    if (route.params.id.includes("TWO")) {
      getOtcInfo(route.params.id);
    } else {
      getStockInfo(route.params.id);
    }
    getStockTick();
    return {
      stockInfo,
      otcInfo,
      stockTick,
    };
  },
};
</script>

<style >
</style>