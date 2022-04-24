import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../slide1.jpg"
import slide2 from "../slide2.jpeg"
import slide3 from "../slide3.jpg"

export default function Slider() {

    return (
    <Carousel>
        <Carousel.Item style={{'height': '500px'}}> 
            <img 
                className="d-bloock w-100" 
                src={slide1} 
                alt="firt slide"
            />
            <Carousel.Caption>
                <h3>Studio312</h3>
                <p>Integrate your business with Information Technology</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px'}}>
            <img 
                className="d-bloock w-100" 
                src={slide2} 
                alt="firt slide"
            />
            <Carousel.Caption>
                <h3>Studio312</h3>
                <p> Individual Design</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px'}}>
            <img 
                className="d-bloock w-100" 
                src={slide3} 
                alt="firt slide"
            />
            <Carousel.Caption>
                <h3>Studio312</h3>
                <p> Studio312 for devops</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)}