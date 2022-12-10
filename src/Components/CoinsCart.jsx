import React, { useEffect } from 'react'
import { useGetCoinsQuery } from '../features/CoinSlice'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoadingSpinner from '../features/loadingSpinner';
function CoinsCart() {
    const [pagenum, setPageNum] = useState(1)
    const [disabled , setDisabled] = useState(false)
    const {
        data: coins,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCoinsQuery(pagenum)
    
    useEffect(() => {
         if(pagenum ==1){
            setDisabled(true)
         }else{
            setDisabled(false)
         }
    },[pagenum])
    const handlePages = (op) => {
        if (op == '-') {
            setPageNum(pagenum => { return pagenum - 1 })
        }
        if (op == '+') {
            setPageNum(pagenum => { return pagenum + 1 })
        }
    }
    return (
        <>

            {isLoading && (
                <LoadingSpinner/>
            )}
            {isSuccess && (
                <>
                    {coins.map((coin) => {
                        const { id, name, image, symbol, current_price, market_cap } = coin
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
            )}


            <button onClick={() => handlePages('-')}  disabled={disabled}><ArrowBackIcon /></button>
            {pagenum}
            <button onClick={() => handlePages('+')} ><ArrowForwardIcon /></button>
        </>
    )
}

export default CoinsCart