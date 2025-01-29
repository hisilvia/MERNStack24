import React, { useState,useEffect } from "react";

let PageWithTime = () =>{
   
    const[time, setTime] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>clearInterval(interval);
    },[]); 

    return(
        <div>
            <h3>Current Time: <p>{time.toLocaleTimeString()}</p></h3>
            
        </div>
    )
}
export default PageWithTime;