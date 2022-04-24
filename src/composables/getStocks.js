import { ref } from "vue"

const BASE_URL = 'https://tw.stock.yahoo.com/_td-stock/api/resource/StockServices.rank;exchange=TAI;limit=100;offset=0;period=1D;sortBy=-volume'
const OTC_URL = 'https://tw.stock.yahoo.com/_td-stock/api/resource/StockServices.rank;exchange=TWO;limit=100;offset=0;period=1D;sortBy=-volume'
const corsURL = 'https://cors-anywhere.herokuapp.com/'

// https://tw.stock.yahoo.com/_td-stock/api/resource/StockServices.rank;exchange=TAI;limit=100;offset=0;period=1D;sortBy=-volume

const getStocks = () => {

  let stockList = ref([])
  let otcList = ref([])

  const getStockList = async () => {
    try {
      const response = await fetch(`${corsURL
        }${BASE_URL}`, {
        method: 'get',
        headers: { 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json', 'Access-Control-Allow-Credentials': 'true', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/111.25 (KHTML, like Gecko) Chrome/99.0.2345.81 Safari/123.36' }
      })
      const data = await response.json()
      stockList.value = await data.list

    } catch (error) {
      console.log(error)
    }

    return stockList

  }

  const getOtcList = async () => {
    try {
      const response = await fetch(`${corsURL
        }${OTC_URL}`, {
        method: 'get',
        headers: { 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json', 'Access-Control-Allow-Credentials': 'true', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/111.25 (KHTML, like Gecko) Chrome/99.0.2345.81 Safari/123.36' }
      })
      const data = await response.json()
      otcList.value = await data.list

    } catch (error) {
      console.log(error)
    }

    return otcList

  }

  return { getStockList, getOtcList, stockList, otcList }
}

// getStocks()

export default getStocks