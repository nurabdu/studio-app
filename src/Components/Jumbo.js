import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import bg from "../bg.jpg";

const Styles = styled.div `
.main {
    background-image: url(${bg});
    background-size: cover;
    position: relative;
    height: 550px;
    margin-bottom: 0.2rem;
    z-index: -2;

    .container{
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
        color: wheat;
    }
}
`
export default function Jumbo () {
    return (
        <Styles>
              <div className="main">
                <Container>
                <h1>web studio for successful digitalization of your business</h1>
                <div className="container">
                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
                        </p>
                 </div>
                 </Container>
              </div>
        </Styles>
)};