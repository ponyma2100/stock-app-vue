<template>
  <div class="navbar">
    <div class="icon" @click="showMenu">
      <i class="fas fa-bars"></i>
    </div>

    <div class="title">
      <router-link to="/"><h2>Stock Market</h2></router-link>
    </div>

    <div class="search">
      <input type="text" v-model="search" />
      <button @click.stop.prevent="handleSearch">Search</button>
      <ul class="search-container" v-show="matchSymbol.length > 0">
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

    <div class="menu" v-show="isMenu">
      <ul>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Resouces</a></li>
      </ul>

      <div class="menu-login">
        <div class="login"><a href="#">Login</a></div>
        <button class="signup">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import getStocks from "../composables/getStocks";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const { getSymbolList, symbolList } = getStocks();
    let isMenu = ref(false);
    let search = ref("");
    let matchSymbol = ref([]);

    onMounted(async () => {
      await getSymbolList();
    });

    const showMenu = () => {
      isMenu.value = !isMenu.value;
    };

    const handleSearch = () => {
      if (search.value.length >= 2) {
        matchSymbol.value = symbolList.value.filter((list) => {
          if (
            list.id.includes(search.value) ||
            list.name.includes(search.value)
          ) {
            return list;
          }
        });

        return matchSymbol;
      } else {
        console.log("請輸入股票代碼或名稱");
      }
    };

    return { showMenu, isMenu, symbolList, search, handleSearch, matchSymbol };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  color: var(--primary);
  position: fixed;
  background: #1f2632;
  top: 0;
  z-index: 99;
}
.icon {
  cursor: pointer;
  z-index: 999;
}
.title {
  z-index: 999;
}

.menu {
  height: 100%;
  width: 40%;
  max-width: 360px;
  min-width: 260px;
  border-radius: 8px;
  background: hsl(218deg 23% 17%);
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
}

.menu ul {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 50%;
  justify-content: space-around;
  list-style-type: none;
  margin-top: 30%;
}

.menu .links::before {
  content: "";
  border: 0.5px solid #dddddd2b;
  position: absolute;
  top: 50%;
}

.menu a {
  color: #fff;
  font-weight: bold;
}

.menu-login {
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10%;
}

.menu .signup {
  width: 80%;
}

.search {
  position: relative;
}

.search-container {
  background: #1f2632;
  width: 60vw;
  height: 400px;
  position: absolute;
  overflow-y: scroll;
  text-align: start;
  z-index: 999;
}
</style>