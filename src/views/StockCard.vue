<template>
  <Navbar />
  <div class="links">
    <router-link to="/">上市</router-link>
    <router-link :to="{ name: 'OtcCard' }">上櫃</router-link>
  </div>
  <Spinner v-show="stockList.length <= 0" />
  <div class="cards">
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
  margin-top: 6.5rem;
  position: relative;
}
.links {
  font-weight: bold;
  background: var(--dark-primary);
  width: 98%;
  color: var(--primary);
  position: fixed;
  display: flex;
  justify-content: center;
  top: 10%;
  z-index: 10;
}

.links a:hover {
  filter: brightness(1.2);
}

.router-link-active {
  color: hsl(150, 100%, 66%);
  border-bottom: 1px solid hsl(150, 100%, 66%);
}
</style>
