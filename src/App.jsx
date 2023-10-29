import React, { useState } from 'react';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';
import Header from './components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [watchTime,setWatchTime] =useState("")
  const handleWatchTime = (time) => {
    const previousWatchTime =JSON.parse(localStorage.getItem("watchTime"))
    if(previousWatchTime){
        const sum =previousWatchTime+time
        localStorage.setItem("watchTime",sum)
        setWatchTime(sum)
    }else{
       localStorage.setItem("watchTime",time)
       setWatchTime(time)
    }
  }
  return (
    <div>
      <div className="header">
<Header></Header>
      </div>
      <div className="main-container flex justify-between mt-5 px-5">
        <div className="home-container">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="sideCart-container">
             <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
<ToastContainer></ToastContainer>
    </div>
  );
};

export default App;