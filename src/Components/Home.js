import React from 'react'
import { useState } from 'react';

function Home() {
    const [val,setVal]=useState("")
    const CTS = ()=>{
        console.log(val)
        setVal("")
    }
    const OC =(e)=>{
        setVal(e.target.value)
    }
  return (
    <>
      <h1 id='header1'>Input what you want to</h1>
      <textarea placeholder='Plese enter here' rows="10" cols="120" value={val} onChange={OC}/><br/>
      <button onClick={CTS}>Click to submit</button>
    </>
  )
}

export default Home
