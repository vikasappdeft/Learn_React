import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time,setTime] = useState();
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
    },[])
  return (
    <div>
        <h2 className="clock">{time}</h2>
    </div>
  )
}

export default Clock
