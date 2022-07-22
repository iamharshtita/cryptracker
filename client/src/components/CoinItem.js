import React from 'react'

import './Coins.css'

const CoinItem = (props) => {
    return (
        <div className='coin-row'>
            <p>{props.coins.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={props.coins.image} alt='' />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p>Rs. {props.coins.current_price.toLocaleString('en-IN')}</p>
            <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hide-mobile'>Rs. {props.coins.total_volume.toLocaleString('en-IN')}</p>
            <p className='hide-mobile'>Rs. {props.coins.market_cap.toLocaleString('en-IN')}</p>
        </div>
    )
}

export default CoinItem