<template>
  <div class="cards">
    <SingleCard :stockList="otcList" />
  </div>
</template>

<script>
import getStocks from "../composables/getStocks";
import getStock from "../composables/getStock";
import SingleCard from "../components/SingleCard.vue";

export default {
  components: { SingleCard },
  setup() {
    const { otcList, getOtcList } = getStocks();
    const { getOtcInfo, otcInfo } = getStock();
    getOtcList();
    getOtcInfo();

    return { otcList };
  },
};
</script>
