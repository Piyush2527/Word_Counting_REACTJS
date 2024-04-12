import React from "react";
import data from "./resum.json";
import Download from "./Download";

function Resume() {
  return (
    <>
      <div className="resume" style={{ color: "white", textAlign: "left" }}>
        <h1 style={{ backgroundColor: "brown", textAlign: "center" }}>
          {data.name}
        </h1>
        <h2 style={{ backgroundColor: "black", textAlign: "center" }}>
          {data.Title}
        </h2>
        <ul style={{ padding: "1rem" }}>
          <div className="profile" style={{ padding: "1rem" }}>
            <b>
              <u>
                <h4>Profile:</h4>
              </u>
            </b>
              {data.Profile}
          </div>
          <br />
          <div className="skill" style={{ padding: "1rem" }}>
            <b>
              <u>
                <h4>{data.Sk}</h4>
              </u>
            </b>
            <li>Java</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
          </div>
          <br />
          <div className="EDU" style={{ padding: "1rem", margin: "1px" }}>
            <b>
              <u>
                <h4>{data.Edu}</h4>
              </u>
            </b>
            <li>MCA</li>
            <li>BCA</li>
            <li>12th</li>
            <li>10th</li>
          </div>
          <br />
          <div className="EXP" style={{ padding: "1rem" }}>
            <b>
              <u>
                <h4>{data.Exp}</h4>
              </u>
            </b>
            <b>
              <h6>NSMX PVT. LTD.</h6>
            </b>
            <li>Proficient in Decipher / Confirmit.</li>
            <li>
              Experience with HTML/CSS and JavaScript for survey customization
              and advanced features Strong understanding of survey design
              principles and methodologies.
            </li>
            <li>
              Knowledge of data base management systems(e.g.,SQL) for data
              storage and retrieval .
            </li>
            <li>Excellent problem-solving and troubleshooting abilities</li>
          </div>
        </ul>
      </div>
      
      <Download/>
    </>
  );
}

export default Resume;
