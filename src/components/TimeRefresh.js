import React, { useState } from 'react'
import '../index.css'

const TimeRefresh = () => {

    let newTime= new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(newTime)
    const TimeRefesh=()=>{
        console.log('time changed')
        newTime= new Date().toLocaleTimeString();
        setCtime(newTime)

    }
  return (
    <>
    <div>
      <h1>{ctime}</h1>
      <button onClick={TimeRefesh}> Get Time</button>
    </div>
    </>
  )
}

export default TimeRefresh
