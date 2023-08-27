
import bitcoin from '../images/bitcoin.jpg'
import ethereum from '../images/ethereum.jpg'
import dogecoin from '../images/dogecoin.jpg'
import tether from '../images/tether.jpg'
import binance from '../images/binance.avif'
import cardano from '../images/cardano.jpg'
import tron from '../images/tron.jpg'
import solana from '../images/solana.avif'
import ripple from '../images/ripple.jpg'

import  { Navigation, Pagination,  Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Link } from 'react-router-dom'
import { useFormik } from 'formik'



const Home = () => {

    
   const search = useFormik({
    initialValues: {
      id: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });






  return (
    <div className=''>
        <div className="container ">
        <Swiper className='mt-5 mx-5 '
         modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
       
        autoplay={{ delay: 2000, disableOnInteraction: false }}
       

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    <SwiperSlide> <Link to='/coin/0'><img class=" simage card rounded-4"  style={{zIndex:'-2'}} src={bitcoin} alt=""/></Link>
    <p className='text-center text-white' >Bitcoin</p>
    </SwiperSlide>
    <SwiperSlide>
            <Link to='/coin/1'><img class=" simage  card rounded-4 " src={ethereum} style={{zIndex:'-2'}} alt="" /></Link>
    <p className='text-center text-white '  >Ethereum</p></SwiperSlide>
              <SwiperSlide><Link to='/coin/8'> <img class=" simage  card rounded-4" src={dogecoin} style={{zIndex:'-2'}} alt="" /></Link>
              <p className='text-center text-white '  >Dogecoin</p>
              </SwiperSlide>
              <SwiperSlide> <Link to='/coin/2'><img class=" simage  card rounded-4" style={{zIndex:'-2'}} src={tether} alt="" /></Link>
              <p className='text-center text-white  ' >Tether</p>
              </SwiperSlide>
              <SwiperSlide> <Link to='/coin/3'><img class=" simage  card rounded-4"  style={{zIndex:'-2'}} src={binance} alt="" /></Link>
              <p className='text-center text-white  ' >Binance</p>
              </SwiperSlide>
              <SwiperSlide><Link to='/coin/7'><img class=" simage  card rounded-4" style={{zIndex:'-2'}} src={cardano} alt="" /></Link>
              <p className='text-center text-white  ' >Cardano</p>
              </SwiperSlide>
              <SwiperSlide> <Link to='/coin/4'><img class=" simage  card rounded-4"  style={{zIndex:'-2'}} src={ripple} alt="" /></Link>
              <p className='text-center text-white ' >Ripple</p>
              </SwiperSlide>
              <SwiperSlide> <Link to='/coin/9'><img class=" simage  card rounded-4" style={{zIndex:'-2'}} src={solana} alt="" /></Link>
              <p className='text-center text-white ' >Solana</p>
              </SwiperSlide>
              <SwiperSlide> <Link to='/coin/10'><img class="  simage card rounded-4" style={{zIndex:'-2'}} src={tron} alt="" /></Link>
              <p className='text-center text-white  ' >Tron</p>
              </SwiperSlide>
            </Swiper>

            <div className='container mt-5' >
<div className="d-flex justify-content-center">
<h1 className='title3 text-white'>Browse Cryptocurrencies</h1>

</div>
<div className="d-flex justify-content-center">
<p className='text-warning text-decoration-underline'>Get details of top 100 cryptocurrencies based on rank</p></div>
            

              <form action="" onSubmit={search.handleSubmit} className= " container">
              <input className='form-control w-50 m-auto ' name='id' type="number" placeholder='Enter a value between 1 to 100' onChange={search.handleChange}
              value={search.values.id}
              />
              
             {/* <Link to='/coin/ value from input */}
              <Link to={`/coin/${search.values.id-1}`} className='d-flex justify-content-center'>
             <button className='btn btn-primary w-50 mt-2'>Search</button></Link>
             </form>
              
            </div>
             
            <div className="container mt-5">

            <div className="d-flex justify-content-center">
            <h1 className='title3 text-white mb-3 text-decoration-underline'>Top  Cryptocurrencies</h1>
            </div>
            <div className="row">

            <div className="col-12 col-md-6 col-lg-6">
            <div className="card bg" >
            <div className="card-body">
            <h5 className="card-title">Bitcoin</h5>
            <p className="card-text">Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.
            <a href="https://en.wikipedia.org/wiki/Bitcoin" className="text-decoration-none"> Read More</a></p>
           <Link to='/coin/0'>
           <button className='btn btn-primary '>Details</button>
           </Link>
           
            </div>
            </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
            <div className="card-body">
            <h5 className="card-title">Ethereum</h5>
            <p className="card-text">Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. After Bitcoin, it is the largest cryptocurrency by market capitalization. 
            <a href="https://en.wikipedia.org/wiki/Ethereum" className='text-decoration-none' > Read More</a></p>

            <Link to='/coin/1'>
           <button className='btn btn-primary'>Details</button>
           </Link>
            </div>
            </div>
            </div>
           

            <div className="col-12 col-md-6 col-lg-6 mt-3">
            <div className="card">
            <div className="card-body">
            <h5 className="card-title">Dogecoin</h5>
            <p className="card-text">Dogecoin is a cryptocurrency invented by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system that is instant, fun, and free from traditional banking fees. <br />
            <a href="https://en.wikipedia.org/wiki/Dogecoin" className='text-decoration-none' >  Read More</a></p>
            <Link to='/coin/8'>
            <button className='btn btn-primary'>Details</button>
            </Link>
            </div>
            </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 mt-3 ">
            <div className="card ">
            <div className="card-body">
            <h5 className="card-title">Tether</h5>
            <p className="card-text">Tether is a controversial cryptocurrency with tokens issued by Tether Limited, which in turn is controlled by the owners of Bitfinex. Tether is called a stablecoin because it is designed to always be worth $1.00.
            <a href="https://en.wikipedia.org/wiki/Tether_(cryptocurrency)" className='text-decoration-none' > Read More</a></p>
            <Link to='/coin/2'>
            <button className='btn btn-primary'>Details</button>
            </Link>
            </div>
            </div>
            </div> 

            <div className="col-12 col-md-6 col-lg-6 mt-3">
            <div className="card">
            <div className="card-body">
            <h5 className="card-title">Binance</h5>
            <p className="card-text">Binance Coin is a cryptocurrency created by the CEO of the world's largest cryptocurrency exchange Binance. BNB coin is used to pay fees on the Binance cryptocurrency exchange for trading cryptocurrencies.
            <a href="https://en.wikipedia.org/wiki/Binance_Coin" className='text-decoration-none' > Read More</a></p>
            <Link to='/coin/3'>
            <button className='btn btn-primary'>Details</button>
            </Link>
            </div>
            </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 mt-3">
            <div className="card">
            <div className="card-body">
            <h5 className="card-title">Cardano</h5>
            <p className="card-text">Cardano is a public blockchain platform. It is open source and decentralized, with consensus achieved using proof of stake. It can facilitate peer-to-peer transactions with its internal cryptocurrency Ada.
            <a href="https://en.wikipedia.org/wiki/Cardano_(platform)" className='text-decoration-none' > Read More</a></p>
            <Link to='/coin/7'>
            <button className='btn btn-primary'>Details</button>
            </Link>
            </div>
            </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 mt-3">
            <div className="card">
            <div className="card-body">
            <h5 className="card-title">Ripple</h5>
            <p className="card-text">Ripple is a real-time gross settlement system, currency exchange and remittance network created by Ripple Labs Inc., a US-based technology company. Released in 2012, Ripple is built upon a distributed open source protocol.
            <a href="https://en.wikipedia.org/wiki/Ripple_(payment_protocol)" className='text-decoration-none' > Read More</a></p>
            <Link to='/coin/4'>
            <button className='btn btn-primary'>Details</button>
            </Link>
            </div>
            </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 mt-3">
            <div className="card">
            <div className="card-body">
            <h5 className="card-title">Solana</h5>
            <p className="card-text">Solana is a decentralized open source blockchain project implementing a permissionless blockchain. The project's mission is to provide a high-performance blockchain that can enable scalability for consumer products and enterprise clients.
            <a href="https://en.wikipedia.org/wiki/Solana_(blockchain)" className='text-decoration-none' > Read More</a></p>
            <Link to='/coin/9'>
            <button className='btn btn-primary'>Details</button>
            </Link>
            </div>
            </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6 mt-3">
            <div className="card mb-5">
            <div className="card-body">
            <h5 className="card-title">Tron</h5>
            <p className="card-text">Tron is a blockchain-based decentralized operating system that aims to construct a worldwide free content entertainment system with the blockchain and distributed storage technology.
            <a href="https://en.wikipedia.org/wiki/Tron_(cryptocurrency)" className='text-decoration-none' > Read More</a></p>
            <Link to='/coin/10'>
            <button className='btn btn-primary'>Details</button>
            </Link>
            </div>
            </div>
            </div>


            </div>

      

            </div>

            

            

           

    </div>
    </div>
  )
}

export default Home