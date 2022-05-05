import { ref } from "vue"

const getQuote = () => {

  let stockTick = ref([])

  const getStockTick = async (symbol) => {
    try {
      const response = await fetch(`http://localhost:3000/api/quote/${symbol}`)
      const data = await response.json()
      stockTick.value = data

    } catch (error) {
      console.log(error)
    }

  }

  return { getStockTick, stockTick }


}


export default getQuote