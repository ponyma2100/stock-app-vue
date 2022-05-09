<template>
  <Navbar />
  <StockDetail
    :stock="stockInfo"
    :stockData="stockData"
    v-if="stockInfo.symbol"
  />
  <StockDetail :stock="otcInfo" :stockData="stockData" v-if="otcInfo.symbol" />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import StockDetail from "../components/StockDetail.vue";
import getStock from "../composables/getStock";
import getQuote from "../composables/getQuote";
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

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

    const dates = computed(() => {
      return stockTick.value.map((stock) => stock.t);
    });

    const prices = computed(() => {
      return stockTick.value.map((stock) => stock.p);
    });

    const stockData = computed(() => ({
      labels: dates.value,
      datasets: [
        {
          data: prices.value,
          backgroundColor: ["rgb(75, 192, 192)"],
          pointBackgroundColor: "#d1d4dc",
          pointBorderWidth: 0.1,
          fill: true,
          tension: 0.5,
        },
      ],
    }));

    return {
      stockInfo,
      otcInfo,
      stockTick,
      dates,
      prices,
      stockData,
    };
  },
};
</script>

<style >
#LineChart {
  max-width: 800px;
}
</style>