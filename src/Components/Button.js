import React from "react";
import styles from "styled-components";

const ButtStyle = styles.div`

button:hover{
    background-color: #2177fa;
}
`
export default function Button(props) {
  
  return (
    <>
      <ButtStyle>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          style={{
            "color": "deepskyblue",
            "border": "none",
            "border-radius": "5px"
          }}>
          <p>{props.text}</p>
        </button>
      </ButtStyle>
    </>
  )
};