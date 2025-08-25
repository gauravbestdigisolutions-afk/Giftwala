import { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Footer from './page/Footer';
import CustomNext from './page/CustomNext';
import Home from './page/Home';
import About from './page/About';
import Login from './page/Login';
import Cart from './page/Cart';
import Electronic from './page/Electronic';
import Contact from './page/Contact';
import PrivacyPolicy from './page/PrivacyPolicy';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar will show on every page */}
      <Navbar />

      {/* Main content */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customnext' element={<CustomNext />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
         <Route path='/electronic/:productName' element={<Electronic />} /> 
      </Routes>

      {/* Footer will show on every page */}
      <Footer />
    </>
  );
}

export default App;
