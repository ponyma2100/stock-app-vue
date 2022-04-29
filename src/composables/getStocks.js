import { ref } from "vue"

// https://tw.stock.yahoo.com/_td-stock/api/resource/StockServices.rank;exchange=TAI;limit=100;offset=0;period=1D;sortBy=-volume

const getStocks = () => {

  let stockList = ref([])
  let otcList = ref([])

  // get stocks
  const getStockList = async () => {
    try {
      const response = await fetch('https://quiet-brushlands-71126.herokuapp.com/api/volumestocks')
      stockList.value = await response.json()

    } catch (error) {
      console.log(error)
    }

    return stockList

  }

  //  get otc stocks
  const getOtcList = async () => {
    try {
      const response = await fetch('https://quiet-brushlands-71126.herokuapp.com/api/volumeotcstocks')
      otcList.value = await response.json()

    } catch (error) {
      console.log(error)
    }

    return otcList

  }

  return { getStockList, getOtcList, stockList, otcList }
}


export default getStocks