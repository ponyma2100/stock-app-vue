<template>
  <div class="navbar">
    <div class="icon" @click="showMenu">
      <i class="fas fa-bars"></i>
    </div>

    <div class="title">
      <router-link to="/"><h2>Stock Market</h2></router-link>
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
export default {
  setup() {
    let isMenu = ref(false);

    const showMenu = () => {
      isMenu.value = !isMenu.value;
    };

    return { showMenu, isMenu };
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
  height: 99vh;
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
}

.menu .signup {
  width: 80%;
}
</style>