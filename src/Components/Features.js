import React from "react";
import { useState } from "react";

function Features(props) {
  const [val, setVal] = useState("");

  const UC = () => {
    console.log(val);
    let newVAl = val.toUpperCase();
    setVal(newVAl);
  };
  const LC = () => {
    console.log(val);
    let newVAl = val.toLowerCase();
    setVal(newVAl);
  };
  const OC = (e) => {
    setVal(e.target.value);
  };
  const Reset = () => {
    setVal("");
  };
  const COUNTS =()=>{
    if(val.length>1){
      let l=val
      var regex = /[a-zA-Z0-9]/g;
      console.log(l.match(regex).length);
      l=l.match(regex).length
      alert("Your words count is: "+ l)
    }else{
      alert("Your text box is empty!")
    }
    
  }

  return (
    <>
      <h1 id="header2">
        Welcome <br />
        You can type in the given below text box.
      </h1>
      <textarea
        placeholder={props.place}
        rows="10"
        cols="120"
        value={val}
        onChange={OC}
      />
      <br />
      <button className="uc" onClick={UC}>Change to Upper Case</button>
      <button className="lc" onClick={LC}>Change to Lower Case</button>
      <button className="re" onClick={Reset}>Reset Box text</button>
      <button className="cw" onClick={COUNTS}>Count</button>
    </>
  );
}

export default Features;
