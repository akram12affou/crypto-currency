import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import CoinsCart from './Components/CoinsCart'
import CoinDetails from './Components/CoinDetails'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import News from './Components/News'
function App() {
  const [search, setSearch] = useState('')
  const [coins, setCoins] = useState([])
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true')
      .then((res) => setCoins(res.data))
  }, [])
 useEffect(() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true')
  .then((res) => setCoins(res.data.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
   )))
 }, [search])

  return (
      <div className="App">
        <Navbar />
        <input value={search}  onChange={(e) => setSearch(e.target.value)}></input>
        <Routes>
          <Route exact path="/" element={<CoinsCart coins={coins} />} />
          <Route exact path="/coin/:id" element={<CoinDetails />} />
          <Route exact path="/news" element={<News />} />


        </Routes>
      </div>
    )
  }

  export default App
