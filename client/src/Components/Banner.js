import React, { useState, useRef } from "react";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";
import "./Banner.css";
import Bali from "../Assets/images/Bali.jpg";
import { Container } from "@material-ui/core";
import axios from "axios";
import { set } from "date-fns";
import SearchResult from "./searchResult";



function Banner() {


  // var word=document.getElementById("searchBar").value
    
  


  const options = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/locations/search",
    params: { query: "new york" , locale: "en_US" },
    headers: {
      "x-rapidapi-key": "9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe",
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      console.log(response.data.suggestions[3].entities);
     
    })
    .catch(function (error) {
      console.error(error);
    });

    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    const [showResults, setResults] = useState([])
    const inputField = useRef()
  
   




  return (
    <div className="banner">
      {/* <div className='banner__search1'>
                {showSearch && <Search />}
 
                <Button onClick={() => setShowSearch(!showSearch)}  class="button1" className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div> */}
      <div className="banner_search">
        {showSearch && <Search />}
       
        <a href = "searchResult">
        
        <Button
          class="button"
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Start Trippin"}
        </Button>
        </a>
        

        <div className="banner_center">
          <input
            type="text"
            ref={inputField}
            name="searchBar"
            id="searchBar"
            // value="new york"
            placeholder="Where you wanna trip too?"
          />
        </div>
        <Button onClick={() => setShowSearch(!showSearch)}  class="button1" className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
         </Button>
      </div>
      {showResults.map((item) => {
        return <h1>{item.display_name}</h1>;
      })}
      <div searchData={showResults} />
    </div>
  );
}

export default Banner;
