import React from "react";
import { useState } from "react";

function Home(props) {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  // const [tem,setTem] =useState("")
  const CTS = () => {
    console.log(val+val2);
    alert("Your welcome!  " + val+" "+val2);
    setVal("")
    setVal2("");
  };
  const OC = (e) => {
    setVal(e.target.value);
  }
  const OC2 = (e) => {
    setVal2(e.target.value);
  };
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
      <h1>Enter your Details</h1>
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
      <button onClick={CTS}>Click to Submit</button>
      {/* <br /><br /><br /><br /><br />
      <Features place="Plese enter text to change it into upper case" p={f?tem:""}/> */}
    </>
  );
}

export default Home;
