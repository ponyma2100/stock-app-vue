<template>
  <StockDetail :stock="stockInfo" v-if="stockInfo.symbol" />
  <StockDetail :stock="otcInfo" v-if="otcInfo.symbol" />
</template>

<script>
import StockDetail from "../components/StockDetail.vue";
import getStock from "../composables/getStock";
import { useRoute } from "vue-router";

export default {
  components: { StockDetail },
  setup(props) {
    const route = useRoute();
    const { getStockInfo, getOtcInfo, stockInfo, otcInfo } = getStock();
    if (route.params.id.includes("TWO")) {
      getOtcInfo(route.params.id);
    } else {
      getStockInfo(route.params.id);
    }

    return {
      stockInfo,
      otcInfo,
    };
  },
};
</script>

<style >
</style>