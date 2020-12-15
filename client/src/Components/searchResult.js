import React, { Component } from "react";
import './searchResult.css'
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/Card";
import Thailand from "../Assets/images/Thailand.jpeg";
import MachuPicchu from "../Assets/images/MachuPicchu.jpeg";
import BoraBora from "../Assets/images/BoraBora.jpeg";

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hotelData: [],
    };
  }
  // const [data, setData] = useState([]);
  // const [hotelData, setHotelData] = useState([]);
  clicked = () => {
    const options = {
      method: "GET",
      url: "https://tripadvisor1.p.rapidapi.com/airports/search",
      params: { query: "New York", location: "en_US" },
      headers: {
        "x-rapidapi-key": "9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe",
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const hotelOptions = {
          method: "GET",
          url: "https://tripadvisor1.p.rapidapi.com/hotels/list-by-latlng",
          params: {
            latitude: response.data.latitude,
            longitude: response.data.longitude,
          },
          headers: {
            "x-rapidapi-key":
              "9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe",
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          },
        };
        axios.request(hotelOptions).then(function (hotelResponse) {
          console.log(hotelResponse.data);
          this.setState({ data: response.data });
        });

        //redirect to searchresultpage
        //pass the data into context or Redirect and pass data
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  render() {
    return (
      <div>
        Search Results
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
      </div>
    );
  }
}

//    data.map(airport=>{
// return <h3>{airport.code}</h3>,
//     <h3>{airport.city_name}</h3>

//    })

export default SearchResult;
