import React from 'react'
import { Link } from 'react-router-dom'
function CoinsCart({ coins }) {
         
    return (
    <>
            {coins.map((coin) => {
                const {id,name,image,symbol,current_price,market_cap} = coin
                return (
                    <div key={id}>
                        <Link to={`/coin/${id}`}>
                            <img src={image} alt="" width={100} height={100} />
                            <h3>{name}</h3>
                            symbol : <span>{symbol}</span>
                            <br />
                            currentprice : <span>{current_price}</span>
                            <br />
                            market cap : <span>{market_cap}</span>
                            <hr />
                        </Link>
                        </div>
                        )
    })}
                    </>
                )
            }

export default CoinsCart