import { ref } from "vue"

const getQuote = () => {

  let stockTick = ref([])

  const getStockTick = async (symbol = 2330) => {
    try {
      const response = await fetch(`http://localhost:3000/api/quote/${symbol}`)
      const data = response.json()
      stockTick.value = data

    } catch (error) {
      console.log(error)
    }

    return { stockTick }
  }

  return { getStockTick }


}


export default getQuote