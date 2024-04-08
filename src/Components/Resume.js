import React from "react";
import data from "./resum.json";

function Resume() {
  return (
    <>
      <div className="resume">
        <h1>{data.name}</h1><br />
        {data.Title}
      </div>
    </>
  );
}

export default Resume;
