import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";
import './banner.css'
import Bali from "../Assets/images/Bali.jpg"
import { Container } from '@material-ui/core';
import axios from 'axios';

// function Plan()(
//  console.log(SearchResult)
// )
function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  function Plan(){
    //redirect with
    
    console.log("searching")
    history.push("/searchResults")
    const options = {
      method: 'GET',
      url: 'https://tripadvisor1.p.rapidapi.com/airports/search',
      params: {query: 'los angeles', location: 'en_US'},
      headers: {
        'x-rapidapi-key': '9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe',
        'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      //redirect to searchresultpage
      //pass the data into context or Redirect and pass data
    }).catch(function (error) {
      console.error(error);
    });
  //   const options = {
  //     method: 'GET',
  //     url: 'https://airbnb-com.p.rapidapi.com/listings/nearby/37.788719679657554/-122.40057774847898',
  //     params: {
  //       offset: '0',
  //       locale: 'en-US',
  //       min_price: '0',
  //       max_price: '5000',
  //       //change guests belowe to a variable you are passing in.
  //       max_guests: '2',
  //       //change check_in and checkout date too
  //       check_in: '2021-02-25',
  //       radius: '5',
  //       currency: 'USD',
  //       check_out: '2021-02-26'
  //     },
  //     headers: {
  //       'x-rapidapi-key': '9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe',
  //       'x-rapidapi-host': '-com.p.rapidapi.com'
  //     }
  //   };
    
    
  //     axios.request(options).then(function (response) {
  //       console.log(response.data);
  //     }).catch(function (error) {
  //       console.error(error);
  //     });
  }

  return (
    <div className="banner">
      <Container>        
            <img className= "letgo-block w-100"
            src={Bali}
            alt="Bali">  
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
        <Button onClick={() =>Plan()} variant="outlined" >
          Plan Your Stay
          
        </Button>
      </div>
      
    </div>
  );
}

export default Banner;