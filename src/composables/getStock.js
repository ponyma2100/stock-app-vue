import { ref } from "vue"

const getStock = () => {

  let stockInfo = ref([])
  let otcInfo = ref([])

  const getStockInfo = async (symbol) => {

    try {
      // const response = await fetch(`https://quiet-brushlands-71126.herokuapp.com/api/stockinfo/${symbol}`)
      const response = await fetch(`http://localhost:3000/api/stockinfo/${symbol}`)
      const data = await response.json()

      stockInfo.value = await data
    } catch (error) {
      console.log(error)
    }

    return stockInfo
  }


  const getOtcInfo = async (symbol) => {

    try {
      // const response = await fetch(`https://quiet-brushlands-71126.herokuapp.com/api/otcinfo/${symbol}`)
      const response = await fetch(`http://localhost:3000/api/otcinfo/${symbol}`)
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