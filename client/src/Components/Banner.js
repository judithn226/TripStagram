import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Search from "./search";
import { useHistory } from "react-router-dom";
import './banner.css'
import TravelBackground from "../Assets/images/LetGoBackground.jpg"
import { Container } from '@material-ui/core';
import Carousel from 'react-bootstrap/esm/Carousel';
import SearchResult from "./searchResults";

// function Plan()(
//  console.log(SearchResult)
// )
function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);


  return (
    <div className="banner">
      <Container>        
            <img className= "letgo-block w-100"
            src={TravelBackground}
            alt="Let Go background">
            </img>            
      </Container>
      
      <div className="banner_search">
        {showSearch && <Search />}
        <Button 
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined">
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        <Button onClick={() => history.push("/search"), console.log("searching")} variant="outlined" >
          Plan Your Stay
          
        </Button>
      </div>
      
    </div>
  );
}

export default Banner;