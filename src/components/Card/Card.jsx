/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import './styles.css'
import { WithRuBalance } from './../../helpers/hoc/WithRuBalance'

const Card = ({ balance, setBalance, ruBalance }) => {
  return (
    <div className="card">
      <div className="card-block">
        <p>CRYPTO-FINANCE</p>
        <button
          className="card-button"
          onClick={() => setBalance((prev) => prev + 1000)}
        >
          Add money
        </button>
      </div>

      <div className="card-block">
        <p>ALEXANDR BORUNOV</p>
        <p>{balance} $</p>
      </div>
    </div>
  )
}

export default WithRuBalance(Card)
