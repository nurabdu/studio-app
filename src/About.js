import React, { useState } from 'react';
import styles from "styled-components";
import Content from './Components/Content';
import Data from './Data';

const Style = styles.div`
    
    .basic{
        grid-template-columns: 1fr 2fr;
        display: grid;
        height: auto;
        min-height: 100vh;
    }

    .rightcoll{
        justify-self: center;
        width: 60%;
        height: 240px;
        font-size: large;

        .button{
          height: 60px;
          border: none;
         }
    }
    .leftcoll{
     
    }
    .content {
      position: absolute;
      width: 700px;
      height: 500px;
      margin-top: 1.2rem;
      border-block-end-color: red;
      display: grid;
   }
  
   .cinfo {
   margin: auto;
   text-align: center;
   color: #1977fa;
   }
`;

const About = () => {
 
  let [active, setActive] = useState("Design");

  return (
    <>
      <Style>
        <div className="basic">
          <div style={{"height": "240px", "margin-top": "0.5rem"}} className="rightcoll" class="d-grid gap-2 col-6 mx-auto">
            <button type="button" class="btn btn-outline-primary" onClick={() => setActive("Design")} >Design</button>
            <button type="button" class="btn btn-outline-primary" onClick={() => setActive("Team")} >Team</button>
            <button type="button" class="btn btn-outline-primary" onClick={() => setActive("Data")} >Data</button>
            <button type="button" class="btn btn-outline-primary" onClick={() => setActive("Libraries")} >Libraries</button>
          </div>
          <div className="leftcoll">
            {active === "Design" && <Content data={Data} contentIndex={0} />}
            {active === "Team" && <Content data={Data} contentIndex={1} />}
            {active === "Data" && <Content data={Data} contentIndex={2} />}
            {active === "Libraries" && <Content data={Data} contentIndex={3} />}
          </div>
        </div>
      </Style>
    </>
  );
}
export default About;

