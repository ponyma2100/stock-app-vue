<template>
  <div class="container">
    <div class="name">
      <div class="name-up">
        <h1>{{ stock.symbolName }}</h1>
        <h3>{{ stock.sectorName }}</h3>
      </div>
      <div class="name-down">
        <h3>{{ stock.symbol }}</h3>
      </div>
      <div
        class="price"
        v-if="stock.change >= 0"
        :class="{ up: stock.change >= 0 }"
      >
        <h1>{{ stock.price }}</h1>
        <h2>{{ stock.change }}</h2>
        <h2>{{ stock.changePercent }}</h2>
      </div>
      <div
        class="price"
        v-if="stock.change < 0"
        :class="{ down: stock.change < 0 }"
      >
        <h1>{{ stock.price }}</h1>
        <h2>{{ stock.change }}</h2>
        <h2>{{ stock.changePercent }}</h2>
      </div>
    </div>

    <div class="stock-container">
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
          <div
            class="change"
            v-if="stock.change >= 0"
            :class="{ up: stock.change >= 0 }"
          >
            <div class="rows">
              <p>漲跌</p>
              <span>{{ stock.change }}</span>
            </div>
            <div class="rows">
              <p>漲跌幅</p>
              <span>{{ stock.changePercent }}</span>
            </div>
          </div>
          <div
            class="change"
            v-if="stock.change < 0"
            :class="{ down: stock.change < 0 }"
          >
            <div class="rows">
              <p>漲跌</p>
              <span>{{ stock.change }}</span>
            </div>
            <div class="rows">
              <p>漲跌幅</p>
              <span>{{ stock.changePercent }}</span>
            </div>
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
      <div class="chart-container" v-if="stockData">
        <LineChart
          :chartData="stockData"
          :options="options"
          style="max-height: 500px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { LineChart } from "vue-chart-3";
import { Chart, registerables, Title, Tooltip } from "chart.js";

Chart.register(...registerables, Tooltip);

export default {
  props: ["stock", "stockData", "options"],

  components: { LineChart },

  setup(props) {},
};
</script>

<style scoped>
.container {
  background: #1e222d;
  color: #d1d4dc;
  width: 99%;
}
.stock-container {
  width: 95%;
  height: 90%;
  margin-top: 15.5rem;
  display: flex;
  flex-direction: column;
  min-width: 325px;
}

.name {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 160px;
  position: fixed;
  top: 6%;
  background: #1e222d;
  left: 15px;
  margin: 30px 5px;
}

.name-up,
.name-down,
.price {
  display: flex;
  align-items: center;
  margin: 2px 20px;
}
.price {
  width: 300px;
  justify-content: space-between;
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

.high,
.up h1,
.up h2,
.up span {
  color: var(--stock-up);
}

.low,
.down h1,
.down h2,
.down span {
  color: var(--stock-down);
}
</style>