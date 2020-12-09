import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Search from "./search";
import { useHistory } from "react-router-dom";
import './banner.css'
import TravelBackground from "../Assets/images/BeachBackground.jpg"
import { Container } from '@material-ui/core';
import Carousel from 'react-bootstrap/esm/Carousel';

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <Container>
        <Carousel className="carousel-inner">
          <Carousel.Item className="item">
            <img className= "d-block w-100"
            src={TravelBackground}
            alt="Beach background">
            </img>
            <Carousel.Caption>
                <h1>Let's Get Away</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      
      <div className="banner_search">
        {showSearch && <Search />}
        <Button 
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined">
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Plan Your Stay
        </Button>
      </div>
      
    </div>
  );
}

export default Banner;