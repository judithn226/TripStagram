import React, { useState } from "react";
import './search.css'
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file



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
      <h3>
        Number of Guests <PeopleIcon />
      </h3>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => history.push("/Search")}>Search Trippin'</Button>
    </div>
  );
}


//This is almost set up. Above you have a function that create a start and end date
//for your trip and the numbers of guest. If you wrap the axios call below in a 
//function you would be able to produce the result you want. Just think of a way 
//to pass these values into this call.


 
export default Search;
