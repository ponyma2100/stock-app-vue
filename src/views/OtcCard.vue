<template>
  <Navbar />
  <div class="cards">
    <SingleCard :stockList="otcList" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import SingleCard from "../components/SingleCard.vue";
import getStocks from "../composables/getStocks";
import getStock from "../composables/getStock";

export default {
  components: { SingleCard, Navbar },
  setup() {
    const { otcList, getOtcList } = getStocks();
    getOtcList();

    return { otcList };
  },
};
</script>
