<template>
  <div class="stock-container">
    <div class="name">
      <div class="name-group up">
        <h1>{{ stock.symbolName }}</h1>
        <h3>{{ stock.sectorName }}</h3>
      </div>
      <div class="name-group down">
        <h3>{{ stock.symbol }}</h3>
      </div>
    </div>
    <div class="price">
      <h1>{{ stock.price }}</h1>
      <h2><i class="fas fa-sort-up"></i>{{ stock.change }}</h2>
      <h2>{{ stock.changePercent }}</h2>
    </div>
    <div class="market">
      <div class="title">
        <h2>市況</h2>
      </div>
      <div class="market-info">
        <div class="rows">
          <span>成交</span>
          <span>{{ stock.price }}</span>
        </div>
        <div class="rows">
          <span>開盤</span>
          <span>{{ stock.regularMarketOpen }}</span>
        </div>
        <div class="rows">
          <span>漲跌</span>
          <span>{{ stock.change }}</span>
        </div>
        <div class="rows">
          <span>漲跌幅</span>
          <span>{{ stock.changePercent }}</span>
        </div>
        <div class="rows">
          <span>最高</span>
          <span>{{ stock.regularMarketDayHigh }}</span>
        </div>
        <div class="rows">
          <span>最低</span>
          <span>{{ stock.regularMarketDayLow }}</span>
        </div>
        <div class="rows">
          <span>昨收</span>
          <span>{{ stock.regularMarketPreviousClose }}</span>
        </div>
        <div class="rows">
          <span>總量</span>
          <span>{{ stock.volumeK }}</span>
        </div>
        <div class="rows">
          <span>昨量</span>
          <span>{{ stock.previousVolumeK }}</span>
        </div>
        <div class="rows">
          <span>成交值(億)</span>
          <span>{{ stock.turnoverM }}</span>
        </div>
      </div>
    </div>
    <div class="chart">
      <LineChart :chartData="stockData" />
    </div>
  </div>
</template>

<script>
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { ref } from "@vue/reactivity";

Chart.register(...registerables);

export default {
  props: ["stock", "stockTick"],

  components: { LineChart },

  setup(props) {
    const dates = props.stockTick.map((stock) => stock.t);
    const prices = props.stockTick.map((stock) => stock.p);

    const stockData = {
      labels: dates,
      datasets: [
        {
          data: prices,
          backgroundColor: ["#ffffff"],
        },
      ],
    };

    return { stockData };
  },
};
</script>

<style scoped>
.stock-container {
  width: 100%;
  height: 90%;
  margin-top: 4.5rem;
  color: #d1d4dc;
  background: #1e222d;
  display: flex;
  flex-direction: column;
  min-width: 360px;
}

.name {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.name-group,
.price {
  display: flex;
  align-items: center;
  margin: 2px 20px;
}

.market,
.market-info {
  display: flex;
  flex-direction: column;
}

.market-info {
  padding: 20px 20px;
  margin: 0 10px;
}

.rows {
  display: flex;
  justify-content: space-between;
}
</style>