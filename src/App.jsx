import { useEffect, useState } from 'react'
import Main from './Pages/Main/Main'
import Header from './components/Header/Header'
import { getCoins } from './api/api'
import { CoinsContext } from './context/coinContext'

function App() {
  const [balance, setBalance] = useState(60000)
  const [coins, setCoins] = useState([])
  const [filteredCoins, setFilteredCoins] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins()
      setCoins(data.coins)
      setFilteredCoins(data.coins)
    }
    fetchData()
  }, [])

  return (
    <>
      <CoinsContext.Provider value={{ coins, filteredCoins }}>
        <Header />
        <Main
          balance={balance}
          setBalance={setBalance}
          coins={coins}
          filteredCoins={filteredCoins}
          setFilteredCoins={setFilteredCoins}
        />
      </CoinsContext.Provider>
    </>
  )
}

export default App
