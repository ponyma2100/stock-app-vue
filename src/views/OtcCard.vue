<template>
  <Navbar />
  <div class="cards">
    <div class="links">
      <router-link to="/">上市</router-link>
      <router-link :to="{ name: 'OtcCard' }">上櫃</router-link>
    </div>
    <Spinner v-show="otcList.length <= 0" />
    <SingleCard :stockList="otcList" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import SingleCard from "../components/SingleCard.vue";
import getStocks from "../composables/getStocks";
import Spinner from "../components/Spinner.vue";

export default {
  components: { SingleCard, Navbar, Spinner },
  setup() {
    const { otcList, getOtcList } = getStocks();
    getOtcList();

    return { otcList };
  },
};
</script>

<style scoped>
.cards {
  margin-top: 7.5rem;
}
.links {
  font-weight: bold;
  background: var(--dark-primary);
  width: 98%;
  color: var(--primary);
  position: fixed;
  display: flex;
  top: 9%;
  z-index: 99;
}

.links a {
  position: relative;
  left: 50%;
}

.links a:hover {
  filter: brightness(1.2);
}

.router-link-active {
  color: hsl(150, 100%, 66%);
  border-bottom: 1px solid hsl(150, 100%, 66%);
}
</style>
