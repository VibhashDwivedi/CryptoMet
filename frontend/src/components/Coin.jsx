import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const Coin = () => {


    const {coinId} = useParams()
    const [data, setData] = useState([])
    const [coin , setCoin] = useState([])
   
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': '9mzZaQIhsngnEFfDT0h1rrCs3tjlU771vZJNiqIUApI='
        }
      };
      
    
const url = `https://openapiv1.coinstats.app/coins/${coinId}`

const fetchData = async () => {
    const response = await axios.get(url, options)
    const data = response.data
    setCoin(data)
    console.log(data)
}

useEffect(() => {
    fetchData()
}
, [])







    


    

   return (
    //display coin data in form of table

    <div className='container mt-4'>
   <div className="row">
    <div className="col-lg-7">
    <div className="card  pt-2 mt-3 pb-2 px-4">
        <div className="card-title">
            <h1 className='text-decoration-underline'>{coin.name}</h1>
            <hr />
            <div className="d-flex justify-content-center">
        <img src={coin.icon} class="mt-4 mb-3" width={250} height={250} alt="..." className='overflow-hidden'/>
        </div>
            <Link target='_blank' to={coin.websiteUrl}><button className='btn btn-primary mt-5 '>Explore More</button></Link>
        </div>
    </div>
        </div>
        <div className="col-lg-5 ">
        <div class="card mt-3  py-2 px-lg-4" >
       
   
    <div class="card-body">
        <div className="d-flex justify-content-center">
        <h4 class="card-title mb-3">Coin Details</h4>
        </div>
    
    {/* represent in table
     */}
    <table className="table table-striped table-dark px-5 ">
    <thead>
    <tr>
    <th scope="col" className='text-primary fs-5 '>Property</th>
    <th scope="col" className='text-primary fs-5'>Value</th>
    </tr>
    </thead>
    <tbody>
    <tr>

<td className=''>id</td>
<td>{coin.id}</td>
</tr>
    <tr>

<td className=''>Symbol</td>
<td>{coin.symbol}</td>
</tr>
    <tr>

<td>Rank</td>
<td>{coin.rank}</td>
</tr>

    <tr>

    <td>Price</td>
    <td>{coin.price} USD</td>
    </tr>
    <tr>

    <td>Volume</td>
    <td>{coin.volume}</td>
    </tr>
    <tr>

    <td>Market Cap</td>
    <td>{coin.marketCap}</td>
    </tr>
    <tr>

    <td>Change</td>
    <td>{coin.priceChange1d}</td>
    </tr>
    <tr>

    <td>Available Supply</td>
    <td>{coin.availableSupply}</td>
    </tr>

    </tbody>
    </table>

    </div>
    </div>
        </div>
   </div>
    <div className='d-flex justify-content-center align-items-center '>
    {/* display data on card */}
   
    </div>
    </div>

   )

}

export default Coin