<template>
  <div class="search-box">
    <input type="text" v-model="search" placeholder="Search..." />
    <ul class="search-container">
      <li class="search-result" v-for="stock in matchSymbol" :key="stock.id">
        <router-link
          :to="{ name: 'Main', params: { id: stock.symbol } }"
          :key="this.$route.params.id"
          ><span>{{ stock.id }}</span>
          <span>{{ stock.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  props: ["symbolList"],
  setup(props) {
    let search = ref("");

    const matchSymbol = computed(() => {
      if (search.value.length >= 2) {
        return props.symbolList.filter((list) => {
          if (
            list.id.includes(search.value) ||
            list.name.includes(search.value)
          ) {
            return list;
          }
        });
      }
    });

    return { search, matchSymbol };
  },
};
</script>

<style scoped>
.search-box {
  width: 100%;
  position: relative;
}

.search-box input {
  width: 65%;
}

.search-container {
  background: #1f2632;
  width: 60vw;
  height: 40vh;
  max-width: 450px;
  font-size: 18px;
  right: 0;
  overflow-y: scroll;
  text-align: start;
  z-index: 999;
}
</style>