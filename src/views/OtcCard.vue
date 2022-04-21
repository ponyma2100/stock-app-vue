<template>
  <div class="cards">
    <SingleCard :stockList="otcList" />
  </div>
</template>

<script>
import getStocks from "../composables/getStocks";
import SingleCard from "../components/SingleCard.vue";

export default {
  components: { SingleCard },
  setup() {
    const { otcList, getOtcList } = getStocks();

    getOtcList();

    return { otcList };
  },
};
</script>
