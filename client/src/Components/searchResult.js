import React, { Component } from "react";
import "./searchResult.css";
import Header from "./header";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Thailand from "../Assets/images/Thailand.jpeg";
import MachuPicchu from "../Assets/images/MachuPicchu.jpeg";
import BoraBora from "../Assets/images/BoraBora.jpeg";
import Greece from "../Assets/images/Greece.jpeg";
import Scandinavia from "../Assets/images/Scandinavia.jpg";
import Goldcoast from "../Assets/images/Goldcoast.jpg";


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
    document.querySelector("#card-title")
   
  })
  .catch(function (error) {
    console.error(error);
  });



class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: props.searchData,
      data: [],
      hotelData: [],
    }
    
  }
  
  render(){
  return (
    <div className = "searchResult">
      <Header />
      <div className="searchResults">
      Search Results:
      </div>
      <div class="card" >
  <div class="card-body">
    <h5 class="card-title">THE PENINSULA BANGKOK</h5>
    <img className="picofPlace" alt="" src={Thailand} fluid />
    <p class="card-text">"All rooms at the Peninsula Bangkok have breathtaking views of the
            Chao Phraya River and the city beyond. Some rooms offer landscaped
            balconies where guests can relax and enjoy the stunning views and
            the river breezes or indulge in an intimate fine dining
            experience."</p>
    <a href="https://www.peninsula.com/en/bangkok/5-star-luxury-hotel-riverside" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      {/* <Card style={{ width: "130rem" }}>
        <Card.Body>
          <Card.Title >Search Results</Card.Title>
          <Image src={Goldcoast} fluid />
          <Card.Text>
            "Post API results here."
          </Card.Text>
          <Card.Link href="#">
            Book Now
          </Card.Link>
        </Card.Body>
      </Card> */}
      {/* <Card style={{ width: "130rem" }}>
        <Card.Body>
          <Card.Title>THE PENINSULA BANGKOK</Card.Title>
          <Image src={Thailand} fluid />
          <Card.Text>
            "All rooms at the Peninsula Bangkok have breathtaking views of the
            Chao Phraya River and the city beyond. Some rooms offer landscaped
            balconies where guests can relax and enjoy the stunning views and
            the river breezes or indulge in an intimate fine dining
            experience."
          </Card.Text>
          <Card.Link href="https://www.peninsula.com/en/bangkok/5-star-luxury-hotel-riverside">
            Book Now
          </Card.Link>
        </Card.Body>
      </Card> */}
      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>INKATERRA MACHU PICCHU PUEBLO HOTEL</Card.Title>
          <Image src={MachuPicchu} fluid />
          <Card.Text>
            "Popular with those heading to the ancient citadel of Machu
            Picchu, Inkaterra Machu Picchu Pueblo Hotel is an intimate Andean
            village with terraced hills, waterfalls, stone pathways and 83
            whitewashed adobe casitas tucked away in the cloud forest."
          </Card.Text>
          <Card.Link href="https://www.inkaterra.com/inkaterra/inkaterra-machu-picchu-pueblo-hotel/the-experience/">
            Book Now
          </Card.Link>
        </Card.Body>
      </Card> */}
      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>CONRAD BORA BORA NUI</Card.Title>
          <Image src={BoraBora} fluid />
          <Card.Text>
            "Welcome to Conrad Bora Bora Nui, a blissful and luxurious resort
            where relaxation and unparalleled views await you. Located on a
            private island - Motu To'opua, our guests experience the longest
            private stretch of soft white sand beaches nestled between the
            soaring backdrop of Mount Otemanu and the mesmerizing lagoon."
          </Card.Text>
          <Card.Link href="https://conradhotels3.hilton.com/en/hotels/french-polynesia/conrad-bora-bora-nui-PPTBNCI/index.html">
            Book Now
          </Card.Link>
        </Card.Body>
      </Card> */}
 <div class="card" >
  <div class="card-body">
    <h5 class="card-title">THE PENINSULA BANGKOK</h5>
    <img className="picofPlace" alt="" src={Thailand} fluid />
    <p class="card-text">"All rooms at the Peninsula Bangkok have breathtaking views of the
            Chao Phraya River and the city beyond. Some rooms offer landscaped
            balconies where guests can relax and enjoy the stunning views and
            the river breezes or indulge in an intimate fine dining
            experience."</p>
    <a href="https://www.peninsula.com/en/bangkok/5-star-luxury-hotel-riverside" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" >
  <div class="card-body">
    <h5 class="card-title">INKATERRA MACHU PICCHU PUEBLO HOTEL</h5>
    <img className="picofPlace" alt="" src={MachuPicchu} fluid />
    <p class="card-text">"Popular with those heading to the ancient citadel of Machu
            Picchu, Inkaterra Machu Picchu Pueblo Hotel is an intimate Andean
            village with terraced hills, waterfalls, stone pathways and 83
            whitewashed adobe casitas tucked away in the cloud forest."</p>
    <a href="https://www.inkaterra.com/inkaterra/inkaterra-machu-picchu-pueblo-hotel/the-experience/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" >
  <div class="card-body">
    <h5 class="card-title">CONRAD BORA BORA NUI</h5>
    <img className="picofPlace" alt="" src={BoraBora} fluid />
    <p class="card-text"> "Welcome to Conrad Bora Bora Nui, a blissful and luxurious resort
            where relaxation and unparalleled views await you. Located on a
            private island - Motu To'opua, our guests experience the longest
            private stretch of soft white sand beaches nestled between the
            soaring backdrop of Mount Otemanu and the mesmerizing lagoon."</p>
    <a href="https://conradhotels3.hilton.com/en/hotels/french-polynesia/conrad-bora-bora-nui-PPTBNCI/index.html" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" >
  <div class="card-body">
    <h5 class="card-title">ASTARTE SUITES SANTORINI</h5>
    <img className="picofPlace" alt="" src={Greece} fluid />
    <p class="card-text">  "Astarte Suites Hotel has created a luxury romantic escape with a
            breathtaking Volcanic backdrop and the mythical Caldera of
            Santorini island in Greece. No wonder it is the favorite choice
            for vacation and honeymoon all over the world."</p>
    <a href="https://www.astartesuites.gr/en/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
     
<div class="card" >
  <div class="card-body">
    <h5 class="card-title">ION ADVENTURE HOTEL ICELAND</h5>
    <img className="picofPlace" alt="" src={Scandinavia} fluid />
    <p class="card-text">  "ION Adventure Hotel at Nesjavellir in Iceland is an unforgettable
            experience. Whether you are seeking a quiet, soulful soak beneath
            the Northern Lights, a challenging trek across an ancient glacier
            or a day of fly-fishing in plentiful icy rivers. "</p>
    <a href="https://ionadventure.ioniceland.is/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>ASTARTE SUITES SANTORINI</Card.Title>
          <Image src={Greece} fluid />
          <Card.Text>
            "Astarte Suites Hotel has created a luxury romantic escape with a
            breathtaking Volcanic backdrop and the mythical Caldera of
            Santorini island in Greece. No wonder it is the favorite choice
            for vacation and honeymoon all over the world."
          </Card.Text>
          <Card.Link href="https://www.astartesuites.gr/en/">
            Book Now
          </Card.Link>
        </Card.Body>
      </Card> */}
      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>ION ADVENTURE HOTEL ICELAND</Card.Title>
          <Image src={Scandinavia} fluid />
          <Card.Text>
            "ION Adventure Hotel at Nesjavellir in Iceland is an unforgettable
            experience. Whether you are seeking a quiet, soulful soak beneath
            the Northern Lights, a challenging trek across an ancient glacier
            or a day of fly-fishing in plentiful icy rivers. "
          </Card.Text>
          <Card.Link href="https://ionadventure.ioniceland.is/">
            Book Now
          </Card.Link>
        </Card.Body>
      </Card> */}
    </div>
  );
}
}





export default SearchResult;