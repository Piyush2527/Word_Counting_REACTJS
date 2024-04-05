import React from 'react'
import { useState } from 'react';
import Home, {name} from './Home';

function Features(props) {
    const [val,setVal]=useState("")
    const UC = ()=>{
        console.log(val)
        let newVAl = val.toUpperCase()
        setVal(newVAl)
    }
    const LC = ()=>{
        console.log(val)
        let newVAl = val.toLowerCase()
        setVal(newVAl)
    }
    const OC =(e)=>{
        setVal(e.target.value)
    }
    const Reset=()=>{
        setVal("")
    }
  return (
    <>
      <h1 id='header2'>Welcome again {props.p}</h1>
      <textarea placeholder={props.place} rows="10" cols="120" value={val} onChange={OC}/><br/>
      <button onClick={UC}>Change to Upper Case</button>
      <button onClick={LC}>Change to Lower Case</button>
      <button onClick={Reset}>Reset Box text</button>
    </>
  )
}

export default Features
