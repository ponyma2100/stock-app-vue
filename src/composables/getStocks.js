import { ref } from "vue";

// https://tw.stock.yahoo.com/_td-stock/api/resource/StockServices.rank;exchange=TAI;limit=100;offset=0;period=1D;sortBy=-volume

const getStocks = () => {
  let stockList = ref([]);
  let otcList = ref([]);
  let symbolList = ref([]);

  // get stocks
  const getStockList = async () => {
    try {
      const response = await fetch(
        "https://ponystock.onrender.com/api/volumestocks"
      );
      stockList.value = await response.json();
    } catch (error) {
      console.log(error);
    }

    return stockList;
  };

  //  get otc stocks
  const getOtcList = async () => {
    try {
      const response = await fetch(
        "https://ponystock.onrender.com/api/volumeotcstocks"
      );
      otcList.value = await response.json();
    } catch (error) {
      console.log(error);
    }

    return otcList;
  };

  //  get all stocks list
  const getSymbolList = async () => {
    try {
      // const response = await fetch('http://localhost:3000/api/symbollist')
      const response = await fetch(
        "https://ponystock.onrender.com/api/symbollist"
      );

      symbolList.value = await response.json();
    } catch (error) {
      console.log(error);
    }

    return symbolList;
  };

  return {
    getStockList,
    getOtcList,
    getSymbolList,
    stockList,
    otcList,
    symbolList,
  };
};

export default getStocks;
