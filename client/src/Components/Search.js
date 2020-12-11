import React, { useState } from "react";
// import './search.css'
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { response } from "express";



function Search() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of Guests <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => history.push("/Search")}>Search Trippin'</Button>
    </div>
  );
}


//This is almost set up. Above you have a function that create a start and end date
//for your trip and the numbers of guest. If you wrap the axios call below in a 
//function you would be able to produce the result you want. Just think of a way 
//to pass these values into this call.

const options = {
  method: 'GET',
  url: 'https://airbnb-com.p.rapidapi.com/listings/nearby/37.788719679657554/-122.40057774847898',
  params: {
    offset: '0',
    locale: 'en-US',
    min_price: '0',
    max_price: '5000',
    //change guests belowe to a variable you are passing in.
    max_guests: '2',
    //change check_in and checkout date too
    check_in: '2021-02-25',
    radius: '5',
    currency: 'USD',
    check_out: '2021-02-26'
  },
  headers: {
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
    'x-rapidapi-host': 'airbnb-com.p.rapidapi.com'
  }
};


  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
 


export default Search;
