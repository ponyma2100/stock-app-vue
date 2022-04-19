<template>
  <div class="cards">
    <div class="card" v-for="stock in stockList" :key="stock.rowId">
      <div class="card-left">
        <div class="stock-name">
          <p>{{ stock.symbolName }}</p>
        </div>
        <div class="stock-id">
          <p>{{ stock.symbol }}</p>
        </div>
      </div>
      <div class="card-center">
        <button class="stock-price">
          {{ stock.previousClose }}
        </button>
        <div class="stock-vol">
          <p><i class="fas fa-sort-up"></i>{{ stock.change }}</p>
          <!-- <p><i class="fas fa-sort-down"></i>{{ stock.change }}</p> -->
          <p>{{ stock.volK }}</p>
        </div>
      </div>
      <div class="card-right">
        <div class="stock-changePercent">
          <span>{{ stock.changePercent }}</span>
        </div>
        <div class="stock-hl">
          <span class="high">H: {{ stock.dayHigh }}</span>
          <span class="low">L: {{ stock.dayLow }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getStocks from "../composables/getStocks";

export default {
  setup() {
    const { stockList, getStockList } = getStocks();

    getStockList();

    return { stockList };
  },
};
</script>

<style scoped>
.card {
  background: var(--dark-secondary);
  /* background: #263544; */
  margin: 5px;
  min-width: 360px;
  display: flex;
  justify-content: space-evenly;
  border-radius: var(--border-radius);
  height: 100px;
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
}
.card-right {
  align-items: flex-end;
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
}

.stock-price:hover {
  filter: opacity(0.8);
}

.stock-vol {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.stock-vol p {
  display: flex;
}

.stock-hl {
  display: flex;
  flex-direction: column;
}
.high {
  color: var(--stock-up);
}
.low {
  color: var(--stock-down);
}

.stock-id {
  font-size: 12px;
}
</style>