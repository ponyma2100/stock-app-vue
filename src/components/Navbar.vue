<template>
  <div class="navbar">
    <div class="icon" @click="showMenu">
      <i class="fas fa-bars"></i>
    </div>

    <div class="title">
      <router-link to="/"><h2>Stock Market</h2></router-link>
    </div>

    <div class="search">
      <Search :symbolList="symbolList" v-show="isShowSearch" />
      <div class="search-icon" @click="handleShowSearch">
        <i class="fas fa-search"></i>
      </div>
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
import Search from "../components/Search.vue";
import symbolList from "../data/symbolList.json";

export default {
  components: { Search },
  setup() {
    let isMenu = ref(false);
    let isShowSearch = ref(false);

    const handleShowSearch = () => {
      isShowSearch.value = !isShowSearch.value;
    };

    const showMenu = () => {
      isMenu.value = !isMenu.value;
    };

    return { showMenu, isMenu, symbolList, handleShowSearch, isShowSearch };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  color: var(--primary);
  position: fixed;
  background: #1f2632;
  top: 0;
  z-index: 99;
}
.icon,
.search-icon {
  cursor: pointer;
  z-index: 999;
}

.icon:hover,
.search-icon:hover {
  filter: brightness(80%);
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
  background: #1f2632;
  position: fixed;
  right: 0;
  display: flex;
  height: 30px;
  margin-right: 30px;
  z-index: 999;
}

.search-icon {
  right: 0;
}
</style>