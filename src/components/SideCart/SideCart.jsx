import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SideCart = ({watchTime}) => {
  const [Time,setTime] =useState(watchTime)

  const [breakTime,setBreakTime] =useState(0)

  useEffect( () =>{
 const getwatchTimeFromlocalStorage =localStorage.getItem("watchTime")
 setTime(getwatchTimeFromlocalStorage)

 const getBreakTime =localStorage.getItem("breakTime")
 setBreakTime(getBreakTime)

  },[watchTime])
  

  const handleBreakTime = (bt) =>{
  // localStorage.setItem("breakTime",bt)
  // setBreakTime(bt)

    const previousBreakTime =JSON.parse(localStorage.getItem("breakTime"))
    if(previousBreakTime){
        const sum =previousBreakTime+bt
        localStorage.setItem("breakTime",sum)
        setBreakTime(sum)
    }else{
       localStorage.setItem("breakTime",bt)
       setBreakTime(bt)
    }

  }
  const handleComplete =() =>{
    toast("Wow so easy!");
  }
 

    return (
        <div className="card justify-center h-full w-full bg-base-100 shadow-2xl px-20">
  <div className="card-body w-full">
    <h1 className="card-title text-5xl mt-20">MY Cart</h1>
   <div className='mt-20'>
   <p className='text-2xl'>Total WatchTime</p>
   <input type="text" value={Time} className='font-bold'/>
   </div>
   <hr className='border-1 border-slate-950'/>
   <h3 className="card-title text-3xl mt-32 px-2">Add Break Time</h3>
   <div id='button' className='gap-2'>
    <button onClick={() =>handleBreakTime(15)} className='btn-info h-12 w-20 rounded-md'>15</button>
    <button onClick={() =>handleBreakTime(25)} className='btn-error h-12 w-20 rounded-md'>25</button>
    <button onClick={() =>handleBreakTime(20)} className='btn-warning h-12 w-20 rounded-md'>20</button>
   </div>
   <input type="text" className='font-bold' value={breakTime}/>
   <hr className='border-1 border-slate-950'/>
   <button onClick={handleComplete} className='btn-info h-12 w-4/5 justify-items-center rounded-md'>Complete</button>
  </div>
  
</div>
    );
};

export default SideCart;