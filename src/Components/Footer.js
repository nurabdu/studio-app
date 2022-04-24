import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
 
 //background-color: '#212529';
 //color: '#fff';
 
const Styles = styled.div
`
.wrapper {
  display: grid;
  grid-gap: 10px;
}

.idbrend{
  grid-column: 2;
  justify-items: stretch;
  justify-content: flex-end;
  display: inline-flex;
}
p{
    justify-content: center;
    margin-top: 0;
    margin-bottom: 1rem;
    display: flex;

}
.ourcont {
  background: #212529;
  color: lemonchiffon;
  grid-row-start: auto;
  grid-gap: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
}

.icon {
  grid-column: 1;
  display: grid;
  justify-content: center;
}
}
.email {
  margin-left: 0.3rem;
  grid-column: 2;
  font-size: smaller;
  justify-self: left;
}
.adress{
  margin-left: 0.5rem;
  font-size: smaller;
  grid-column: 3;
  text-decoration-line: underline;

}
`
const Footer = () => (
  <Styles>
    <div className="wrapper" >
      <div className="ourcont">
       <div className="icon">
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <div className="email"><p>Email:</p></div>
            <span className="adress"><p>abdirashitov.b@gmail.com</p></span>
            </div>
           <div className="idbrend">
          <p>web studio 312</p>
         </div>
       </div>
     </div>
    </Styles>
)
export default Footer;