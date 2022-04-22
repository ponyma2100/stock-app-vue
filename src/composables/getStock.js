import { ref } from "vue"
let BASE_URL = `https://tw.stock.yahoo.com/_td-stock/api/resource/StockServices.stockList;fields=avgPrice%2Corderbook;symbols=`
const corsURL = 'https://cors-anywhere.herokuapp.com/'
const getStock = () => {

  let stockInfo = ref([])
  let otcInfo = ref([])

  const getStockInfo = async (symbol = '2330') => {

    const STOCK_URL = BASE_URL + `${symbol + '.TW'}`

    try {
      const response = await fetch(`${corsURL
        }${STOCK_URL}`, {
        method: 'get',
        headers: { 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json', 'Access-Control-Allow-Credentials': 'true', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/111.25 (KHTML, like Gecko) Chrome/99.0.2345.81 Safari/123.36' }
      })

      const data = await response.json()

      stockInfo.value = await data

    } catch (error) {
      console.log(error)
    }

    return stockInfo

  }


  const getOtcInfo = async (symbol = '8069') => {

    const OTC_URL = BASE_URL + `${symbol + '.TWO'}`

    try {
      const response = await fetch(`${corsURL
        }${OTC_URL}`, {
        method: 'get',
        headers: { 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json', 'Access-Control-Allow-Credentials': 'true', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/111.25 (KHTML, like Gecko) Chrome/99.0.2345.81 Safari/123.36' }
      })

      const data = await response.json()

      otcInfo.value = await data


    } catch (error) {
      console.log(error)
    }

    return otcInfo

  }



  return {
    getStockInfo, getOtcInfo, stockInfo, otcInfo
  }

}



export default getStock