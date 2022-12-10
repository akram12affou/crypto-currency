import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { CoinSlice } from './features/CoinSlice';
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ApiProvider api={CoinSlice}>
      <BrowserRouter><App /></BrowserRouter>
      
    </ApiProvider>
  </React.StrictMode>
)
