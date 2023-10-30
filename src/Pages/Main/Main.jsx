import Card from '../../components/Card/Card'
import CoinList from '../../components/CoinList/CoinList'
import FilterBlock from '../../components/FilterBlock/FilterBlock'
import styles from './styles.module.css'

const Main = ({ balance, setBalance, coins, setFilteredCoins }) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock setFilteredCoins={setFilteredCoins} />
      {coins.length > 0 ? <CoinList /> : <div>Loading...</div>}
    </main>
  )
}

export default Main
