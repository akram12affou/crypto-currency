import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
const News = () =>  {
   useEffect(() => {

    const options = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/search/trending',
      }; 
      axios.request(options).then( (response) =>  {
          console.log(response.data.coins);
      }).catch( (error) =>  {
          console.error(error);
      });
},[])
  return (
    <div>News</div>
  )
}

export default News