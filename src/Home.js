import React from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import Slider from "./Components/Slider";
import Jumbo from "./Components/Jumbo";
import bg from "./bg.jpg";
import bg2 from "./bg2.jpg";
import slide1 from "./slide1.jpg";

export const Home = () => (
   <>
     <Slider/>
      <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
         <Row>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={slide1}/>
                    <Card.Body>
                        <Card.Title> Studio312</Card.Title>
                        <Card.Text>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={bg2}/>
                    <Card.Body>
                        <Card.Title>Studio312</Card.Title>
                        <Card.Text>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={bg}/>
                    <Card.Body>
                        <Card.Title>Studio312</Card.Title>
                        <Card.Text>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
         </Row>
       </Container>
       <Jumbo/>
    </>
)