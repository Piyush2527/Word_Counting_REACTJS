import React from 'react'
import { useState } from 'react';
import Features from './Features';

function Home(props) {
    
    const [val,setVal]=useState("")
    const [f,setF]=useState(false)
    const [tem,setTem] =useState("")
    const CTS = ()=>{
        console.log(val)
        // alert("Your welcome!  "+val)
        setVal("")
    }
    const OC =(e)=>{
        setVal(e.target.value)
    }
    const feed =()=>{
      setF(true)
      setTem(val)
    }
    const ma=()=>{
      CTS()
      feed()
    }
    
  return (
    <>
      <h1 id='header1'>Input what you want to {val}</h1>
      Enter your name:<br/> <br /><input type='text' placeholder={props.place} rows="10" cols="10" value={val} onChange={OC}/><br/><br />
      <button onClick={ma}>Click to Submit</button>
      <br /><br /><br /><br /><br />
      <Features place="Plese enter text to change it into upper case" p={f?tem:""}/>
    </>
  )
}

export default Home
