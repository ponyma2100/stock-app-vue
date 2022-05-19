<template>
  <Navbar />
  <Spinner v-if="!stockInfo.price && !otcInfo.price" />
  <StockDetail
    :stock="stockInfo"
    :stockData="stockData"
    :options="options"
    v-if="stockInfo.symbol"
  />
  <StockDetail
    :stock="otcInfo"
    :stockData="stockData"
    v-if="otcInfo.symbol"
    :options="options"
  />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import StockDetail from "../components/StockDetail.vue";
import Spinner from "../components/Spinner.vue";
import getStock from "../composables/getStock";
import getQuote from "../composables/getQuote";
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  components: { StockDetail, Navbar, Spinner },
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
      const arr = stockTick.value.map((stock) => {
        return stock.t.toString();
      });
      return arr.map((stock) => stock.slice(8, arr.length));
    });

    const prices = computed(() => {
      return stockTick.value.map((stock) => stock.p);
    });

    const showDate = computed(() => {
      return stockInfo.value.regularMarketTime
        ? stockInfo.value.regularMarketTime.split("T")[0]
        : otcInfo.value.regularMarketTime.split("T")[0];
    });

    const stockData = computed(() => ({
      labels: dates.value,
      datasets: [
        {
          label: showDate.value,
          data: prices.value,
          backgroundColor: ["rgb(75, 192, 192)"],
          pointBackgroundColor: ["rgba(0,0,0,0)"],
          pointBorderWidth: 0.1,
          maintainAspectRatio: false,
          fill: true,
          tension: 0.5,
        },
      ],
    }));

    const options = computed(() => ({
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            title: function (context) {
              let title = "Time:" + context[0].label || "";
              return title;
            },

            label: function (context) {
              let label = "Price:" + context.parsed.y || "";
              return label;
            },
          },
        },
      },
    }));

    return {
      stockInfo,
      otcInfo,
      stockTick,
      dates,
      prices,
      stockData,
      showDate,
      options,
    };
  },
};
</script>

<style scoped>
.spinner {
  position: absolute;
  top: 25%;
}
</style>