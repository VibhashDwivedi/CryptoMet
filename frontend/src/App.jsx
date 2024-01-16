import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './components/Home';

import Coin from './components/Coin';
import Error from './components/Error';
import Welcome from './components/Welcome';



function App() {
return (
    <div className='home-bg'> 
    <Toaster position='top-center'/>
<BrowserRouter >
<Navbar/>

<Routes>
<Route path="/" element={<Welcome/>}/>
<Route path="/CryptoMeter" element={<Welcome/>}/>
<Route path="/home" element={<Home/>}/>
<Route path='/coin/:coinId' element={<Coin/>} />


<Route path='*' element={<Error/>} />


</Routes>
</BrowserRouter>

    </div>
    
  );
}

export default App;