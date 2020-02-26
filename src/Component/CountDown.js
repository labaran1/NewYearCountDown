import React, {useRef, useEffect , useState} from 'react';


function CountDown() {

    const date = new Date()
    const currentYear = date.getFullYear();
    const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`)

    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    let second = Math.floor(diff / 1000) % 60;    




    

 

 
  


   
  
   
    return (
        <div id="countdown">
        <div className="time">
    <h2 >{d}</h2>
<small>Days</small>

        </div>
        <div className="time">
    <h2 >{h}</h2>
<small>Hours</small>

        </div>
        <div className="time">
    <h2  >{m}</h2>
<small>Minutes</small>

        </div>

        <div className="time">
    <h2 >{second}</h2>
<small>Seconds</small>

        </div>

        
        </div>


    )
}


export default  CountDown;

