import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import CoinsCart from './Components/CoinsCart'
import CoinDetails from './Components/CoinDetails'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { useDispatch } from 'react-redux'
function App() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
 useEffect(() => {
  
 }, [search])
 
  return (
      <div className="App">

        <button onClick={() => dispatch( add())}></button>
        <Navbar />
        <input value={search}  onChange={(e) => setSearch(e.target.value)}></input>
        <Routes>
         <Route exact path="/" element={<CoinsCart />} />
          <Route exact path="/coin/:id" element={<CoinDetails />} />
          <Route exact path="/news" element={<News />} />


        </Routes>

      </div>
    )
  }

  export default App
