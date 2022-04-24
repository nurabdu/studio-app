import React from 'react'
import styles from 'styled-components';

const ContStyle = styles.div`
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
`
const Content = ({ data, contentIndex }) => {
  return (
    <ContStyle>
      <div className="content">
        {data[contentIndex].map(item => (
          <div>
            <img
              className="d-bloock w-100"
              src={item.image}
              alt=""
            />
            <div className="cinfo">
              <h4>{item.title}</h4>
              <p>
                {item.text}
              </p>
            </div>
          </div>))}
      </div>
    </ContStyle>
  );
};
export default Content;