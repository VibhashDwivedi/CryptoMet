import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className=''>
        <div className="container ">
        <h1 className='title text-center'>CryptoMeter</h1>
        <div className='mt-4'>
       <h6 className='text-white  fw-light fs-4 px-5'> Explore the world of cryptocurrencies with our comprehensive tracker app - <span className='fw-bold'>  CryptoMeter</span>. Get real-time updates on a vast array of digital currencies, from Bitcoin to altcoins, with detailed information on prices, market capitalization, trading volumes, available supply and rank. Stay ahead of the market, make informed decisions, and manage your cryptocurrency investments with ease using our user-friendly interface.
</h6></div>
<p>
    <h6 className='text-white fw-light fs-4 px-5'>  CryptoMeter is a cryptocurrency tracker that displays real-time data on the top 100 cryptocurrencies by market capitalization. The data is updated every minute, and the cryptocurrency prices are sourced from the Binance exchange. The cryptocurrency prices are displayed in USD.</h6>
</p>
        </div>
       
<div className="d-flex justify-content-center">
    <Link  to='/home'><button className="btn btn-lg btn-primary">Get Started</button></Link>
</div>
    </div>
  )
}

export default Welcome