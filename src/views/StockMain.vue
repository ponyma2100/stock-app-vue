<template>
  <div class="stock-container">
    <div class="name"></div>
  </div>
</template>

<script>
import getStock from "../composables/getStock";
import { useRoute } from "vue-router";

export default {
  setup(props) {
    const route = useRoute();
    const { getStockInfo, getOtcInfo, stockInfo, otcInfo } = getStock();
    if (route.params.id.includes("TWO")) {
      getOtcInfo(route.params.id);
    }

    getStockInfo(route.params.id);

    return {
      stockInfo,
      otcInfo,
    };
  },
};
</script>

<style>
</style>