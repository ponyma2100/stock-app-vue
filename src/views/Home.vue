<template>
  <Navbar />
  <StockCard />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import StockCard from "../components/StockCard.vue";

export default {
  name: "Home",
  components: { Navbar, StockCard },
};
</script>
