import { useEffect, useState } from 'react'

export const useFilterCoins = (coins, setFilteredCoins) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const filteredCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(value.toLowerCase())
    })
    setFilteredCoins(filteredCoins)
  }, [value])

  return { setValue, value }
}
