<template>
  <Navbar />
  <StockDetail
    :stock="stockInfo"
    :stockTick="stockTick"
    v-if="stockInfo.symbol"
  />
  <StockDetail :stock="otcInfo" :stockTick="stockTick" v-if="otcInfo.symbol" />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import StockDetail from "../components/StockDetail.vue";
import getStock from "../composables/getStock";
import getQuote from "../composables/getQuote";
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";

export default {
  components: { StockDetail, Navbar },
  setup(props) {
    const route = useRoute();
    const { getStockInfo, getOtcInfo, stockInfo, otcInfo } = getStock();
    const { getStockTick, stockTick } = getQuote();

    let id = ref("");
    id = route.params.id.split(".")[0];

    if (route.params.id.includes("TWO")) {
      getOtcInfo(route.params.id);
    } else {
      getStockInfo(route.params.id);
    }

    getStockTick(id);

    return {
      stockInfo,
      otcInfo,
      stockTick,
    };
  },
};
</script>

<style >
#LineChart {
  max-width: 800px;
}
</style>