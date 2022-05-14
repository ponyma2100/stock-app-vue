<template>
  <div v-for="stock in stockList" :key="stock.rowId">
    <router-link
      class="card"
      :stockList="stockList"
      :to="{ name: 'Main', params: { id: stock.rowId } }"
    >
      <div class="card-left">
        <div class="stock-name">
          <p>{{ stock.symbolName }}</p>
        </div>
        <div class="stock-id">
          <p>{{ stock.symbol }}</p>
        </div>
      </div>
      <div
        class="card-center"
        v-if="stock.change >= 0"
        :class="{ up: stock.change >= 0 }"
      >
        <button class="stock-price">
          <span> {{ stock.price }}</span>
        </button>
        <div class="stock-vol">
          <span><i class="fas fa-sort-up"></i>{{ stock.change }}</span>
          <span>{{ stock.changePercent }}</span>
        </div>
      </div>
      <div
        class="card-center"
        v-if="stock.change < 0"
        :class="{ down: stock.change < 0 }"
      >
        <button class="stock-price">
          <span>{{ stock.price }}</span>
        </button>
        <div class="stock-vol">
          <span><i class="fas fa-sort-down"></i>{{ stock.change }}</span>
          <span>{{ stock.changePercent }}</span>
        </div>
      </div>
      <div class="card-right">
        <span>V: {{ stock.volK }}</span>
        <span class="high">H: {{ stock.dayHigh }}</span>
        <span class="low">L: {{ stock.dayLow }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["stockList"],
  setup(props) {},
};
</script>

<style scoped>
.card {
  background: var(--dark-secondary);
  min-width: 325px;
  display: flex;
  justify-content: space-evenly;
  border-radius: var(--border-radius);
  height: 100px;
}
.card:hover {
  filter: brightness(1.2);
  z-index: 1;
}

.card-left,
.card-center,
.card-right {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card-left {
  align-items: start;
}

.card-center {
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
}
.card-right {
  align-items: flex-end;
  font-size: 14px;
}
.stock-name {
  font-weight: bold;
  font-size: 20px;
}

.stock-price {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-primary);
  border-radius: var(--border-radius);
  width: 100px;
  height: 40px;
  min-width: 60px;
  border: 0;
  color: var(--stock-up);
  font-size: 16px;
  cursor: pointer;
}

.stock-price:hover {
  filter: opacity(0.8);
}

.stock-vol {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.stock-vol span {
  display: flex;
}

.down .stock-vol span {
  align-items: flex-end;
}

.high,
.up span {
  color: var(--stock-up);
}

.low,
.down span {
  color: var(--stock-down);
}

.stock-id {
  font-size: 12px;
}

.stock-id p {
  color: var(--neutral-gray);
}
</style>