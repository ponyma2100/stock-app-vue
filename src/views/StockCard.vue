<template>
  <Navbar />
  <div class="cards">
    <div class="links">
      <router-link to="/">上市</router-link>
      <router-link :to="{ name: 'OtcCard' }">上櫃</router-link>
    </div>
    <Spinner v-show="stockList.length <= 0" />
    <SingleCard :stockList="stockList" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import getStocks from "../composables/getStocks";
import SingleCard from "../components/SingleCard.vue";
import Spinner from "../components/Spinner.vue";

export default {
  components: { SingleCard, Navbar, Spinner },
  setup() {
    const { stockList, getStockList } = getStocks();

    getStockList();

    return { stockList };
  },
};
</script>

<style scoped>
.cards {
  margin-top: 4.5rem;
}
.links {
  font-weight: bold;
}

.links a:hover {
  filter: brightness(1.2);
}

.router-link-active {
  color: hsl(150, 100%, 66%);
  border-bottom: 1px solid hsl(150, 100%, 66%);
}
</style>
