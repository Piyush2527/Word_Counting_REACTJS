import React from "react";
import { useState } from "react";
import Features from "./Features";

function Home(props) {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("")
  const [y, setY] = useState("f")
  // const [tem,setTem] =useState("")
  const CTS = () => {
    if(val==""){
      alert("Plese enter your name")
    }else{
      console.log(val+val2);
      alert("Your welcome!  " + val+" "+val2);
      setVal("")
      setVal2("");
      setVal3("")
    }
    
  }
  const CC = ()=>{
    console.log("cc")
    setY("feature") 
    console.log("cf")     
  }
  const OC = (e) => {
    setVal(e.target.value);
  }
  const OC2 = (e) => {
    setVal2(e.target.value);
  }
  const OC3 = (e) => {
    setVal3(e.target.value);
  }
  // const feed =()=>{
  //   setF(true)
  //   setTem(val)
  // }
  // const ma=()=>{
  //   CTS()
  //   feed()
  // }

  return (
    <>
      {/* <h1 id='header1'>Input what you want to {val}</h1> */}
      <h1 className="homeheading">Enter Your Details</h1>
      <div className="Detail">
      <h6>NAME:</h6>
      <input
        type="text"
        aria-label="First name"
        placeholder={props.fplace}
        value={val}
        onChange={OC}
        className="form-control"
      />
      <input
        type="text"
        aria-label="Last name"
        placeholder={props.lplace}
        value={val2}
        onChange={OC2}
        className="form-control"
      />
      <h6>EMAIL:</h6>
      <input
        type="email"
        aria-label="email"
        placeholder={props.eplace}
        value={val3}
        onChange={OC3}
        className="form-control"
      />
      </div>
      <br />
      <button onClick={CTS}>Click to Submit</button>
      {/* <button onClick={CC}>GO to advanced</button>
      {
        y==="feature" && <Features/>
      } */}
      {/* <br /><br /><br /><br /><br />
      <Features place="Plese enter text to change it into upper case" p={f?tem:""}/> */}
    </>
  );
}

export default Home;
