import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const Coin = () => {


    const {coinId} = useParams()
    const {currency} = useParams()
   
    const [coin , setCoin] = useState([])
   
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': '9mzZaQIhsngnEFfDT0h1rrCs3tjlU771vZJNiqIUApI='
        }
      };
      
    
const url = `https://openapiv1.coinstats.app/coins/${coinId}?currency=${currency}`

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



function refreshPage(){ 
    window.location.reload(); 
}



    


    

   return (
    //display coin data in form of table

    <div className='container mt-4'>
   <div className="row">
    <div className="col-lg-7">
    <div className="card  pt-2 mt-3 pb-2 px-4">
        <div className="card-title">
            <h1 className='text-decoration-underline'>{coin.name}</h1>
            <hr />
            <div className="d-flex justify-content-center my-lg-4">
        <img src={coin.icon} class="mt-3 " width={250} height={250} alt="..." className='overflow-hidden'/>
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

<td className=''>Id</td>
<td>{coin.id}</td>
</tr>
    <tr>

<td className=''>Symbol</td>
<td>{coin.symbol}</td>
</tr>
    

    <tr>

    <td>Price</td>
    <td>{coin.price} {currency}
    {/* Create a dropdown menu */}
    {/* <div class="dropdown"> */}
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {/* Change Currency */}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li onClick={refreshPage}><Link class="dropdown-item" to={`/coin/${coinId}/INR`}>INR</Link></li>
    <li onClick={refreshPage}><Link class="dropdown-item" to={`/coin/${coinId}/USD`}>USD</Link></li>
    <li onClick={refreshPage}><Link class="dropdown-item" to={`/coin/${coinId}/EUR`}>EUR</Link></li>
    <li onClick={refreshPage}><Link class="dropdown-item" to={`/coin/${coinId}/GBP`}>GBP</Link></li>
    <li onClick={refreshPage}><Link class="dropdown-item" to={`/coin/${coinId}/JPY`}>JPY</Link></li>
    <li onClick={refreshPage}><Link class="dropdown-item" to={`/coin/${coinId}/KRW`}>KRW</Link></li>
    <li onClick={refreshPage}><Link class="dropdown-item" to={`/coin/${coinId}/CNY`}>CNY</Link></li>
   


    </ul>
    {/* </div> */}

    </td>
    </tr>
    <tr>

<td>Rank</td>
<td>{coin.rank}</td>
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