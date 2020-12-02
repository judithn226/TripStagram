import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Bali from "../Assets/images/Bali.jpg";
import Goldcoast from "../Assets/images/Goldcoast.jpg";
import Rio from "../Assets/images/Rio.jpg";

function Places() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Suggested Destinations</h1>
          <p>Based on your preferences, check out the below destinations!</p>
          <Container />
        </Container>
      </Jumbotron>
      <Container>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={Bali}
              alt="Bali"
            />
            <Carousel.Caption>
              <h3>Bali</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={Goldcoast}
              alt="Goldcoast"
            />
            <Carousel.Caption>
              <h3>Goldcoast</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Rio}
              alt="Rio"
            />
            <Carousel.Caption>
              <h3>Rio</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Places;
