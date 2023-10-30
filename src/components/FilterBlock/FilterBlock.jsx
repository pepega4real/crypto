/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import './styles.css'
import { CoinsContext } from '../../context/coinContext'
import { useFilterCoins } from '../../hooks/useFilterCoins'

const FilterBlock = ({ setFilteredCoins }) => {
  const coinsContext = useContext(CoinsContext)
  const { coins } = coinsContext

  const { setValue, value } = useFilterCoins(coins, setFilteredCoins)

  return (
    <div className="filter-block">
      <input
        onChange={(e) => setValue(e.target.value)}
        className="filter"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

export default React.memo(FilterBlock)
