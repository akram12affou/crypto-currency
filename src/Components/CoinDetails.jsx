import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useGetCoinQuery} from '../features/CoinSlice'
import { useState } from 'react'
import LoadingSpinner from '../features/loadingSpinner'
function CoinDetails() {
    const params = useParams("/coin/:id")
    const {id} = params
    const {
      data: coin,
      isLoading,
      isSuccess,
      isError,
      error
  } = useGetCoinQuery(id)
  return (
    <div>
        {[coin].map((e) => {
          
            return (
              <>
              {
                isLoading && <LoadingSpinner/>
              }
              {
                isSuccess && <p>{e.name}</p>
              }
              
               </>
            ) 
        })}
       
    </div>
  )
}

export default CoinDetails