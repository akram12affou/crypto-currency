import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
function CoinDetails() {
    const [coin, setCoin] = useState([])
    const [loading,setLoading] = useState(false)
    const params = useParams("/coin/:id")
    const {id} = params
    
    useEffect(() => {
      setLoading(true)
    axios.get('https://api.coingecko.com/api/v3/coins/' + id)
    .then((res) => setCoin(res.data))
    .finally(() => setLoading(false))
     
    
  },[])
  
  
    
  return (
    <div>
        {[coin].map((e) => {
          
            return (
              <>
             {  !loading ? (
               <div key={e.id}>
                  <p>{e.name}</p>
               </div> ) : (<div>
                  <p>...loading</p>
               </div>)
               }
              
               </>
            ) 
        })}
       
    </div>
  )
}

export default CoinDetails