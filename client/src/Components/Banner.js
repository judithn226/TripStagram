import React, { useState, useRef } from "react";
import { Button } from "@material-ui/core";
import Search from "./searchResult";
import { useHistory } from "react-router-dom";
import './Banner.css'
import Bali from "../Assets/images/Bali.jpg"
import { Container } from '@material-ui/core';
import axios from 'axios';
import { set } from "date-fns";
import SearchResult from "./searchResult";


function Banner() {
  
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  const [showResults, setResults] = useState([])
  const inputField = useRef()

  function search(){
    const city = inputField.current.value



 

    const options = {
      method: 'GET',
      url: 'https://hotels-com-free.p.rapidapi.com/suggest/v1.7/json',
      params: {query: city, locale: 'en_US'},
      headers: {
        'x-rapidapi-key': '9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe',
        'x-rapidapi-host': 'hotels-com-free.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });


    // const options = {
    //   method: 'GET',
    //   url: 'https://hotels4.p.rapidapi.com/locations/search',
    //   params: {query: city, locale: 'en_US'},
    //   headers: {
    //     'x-rapidapi-key': '9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe',
    //     'x-rapidapi-host': 'hotels4.p.rapidapi.com'
    //   }
    // };
    
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    //   console.log(response.data.suggestions)
    //  setResults(response.data.suggestions)
    // }).catch(function (error) {
    //   console.error(error);
    // });


    // const options = {
    //   method: 'GET',
    //   url: 'https://tripadvisor1.p.rapidapi.com/airports/search',
    //   params: {query: city, location: 'en_US'},
    //   headers: {
    //     'x-rapidapi-key': '9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe',
    //     'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com'
    //   }
    // };
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    //   setResults(response.data)
    // }).catch(function (error) {
    //   console.error(error);
    // });
  }
  // function Plan(){
  //   //redirect with
    
  //   console.log("searching")
  //   // <Link to ="/searchResult">SearchResult</Link>
  //   const options = {
  //     method: 'GET',
  //     url: 'https://tripadvisor1.p.rapidapi.com/airports/search',
  //     params: {query: 'los angeles', location: 'en_US'},
  //     headers: {
  //       'x-rapidapi-key': '9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe',
  //       'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com'
  //     }
  //   };
  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
  //     //redirect to searchresultpage
  //     //pass the data into context or Redirect and pass data
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // //   const options = {
  // //     method: 'GET',
  // //     url: 'https://airbnb-com.p.rapidapi.com/listings/nearby/37.788719679657554/-122.40057774847898',
  // //     params: {
  // //       offset: '0',
  // //       locale: 'en-US',
  // //       min_price: '0',
  // //       max_price: '5000',
  // //       //change guests belowe to a variable you are passing in.
  // //       max_guests: '2',
  // //       //change check_in and checkout date too
  // //       check_in: '2021-02-25',
  // //       radius: '5',
  // //       currency: 'USD',
  // //       check_out: '2021-02-26'
  // //     },
  // //     headers: {
  // //       'x-rapidapi-key': '9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe',
  // //       'x-rapidapi-host': '-com.p.rapidapi.com'
  // //     }
  // //   };
    
    
  // //     axios.request(options).then(function (response) {
  // //       console.log(response.data);
  // //     }).catch(function (error) {
  // //       console.error(error);
  // //     });


  // }

  return (
    <div className="banner">
      {/* <div className='banner_center'>
                <input type="text" 
                ref={inputField}
                name = "searchBar"
                id = "searchBar"
                placeholder = "Type to search" />
            </div>
            <ul id="charactersList"></ul> */}
      
      <div className="banner_search">
        {showSearch && <Search />}
        <Button class = "button"
          onclick="href='searchResult';"
         
          className="banner__searchButton"
          variant="outlined">
          {showSearch ? "Hide" : "Start Trippin"}
        </Button>
      
        <div className='banner_center'>
                <input type="text" 
                ref={inputField}
                name = "searchBar"
                id = "searchBar"
                placeholder = "Type to search" />
            </div>
      </div>
      {
        
        showResults.map(item=> {
          return(
            <h1>{item.display_name}</h1>
          )
        })
    
    }
    <div
    searchData = {
      showResults
     }/>
    
    </div>

  );
}

export default Banner;