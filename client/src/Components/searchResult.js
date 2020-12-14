import React, { Component } from "react";
import './searchResult.css';
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
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={Thailand} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={MachuPicchu}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={BoraBora} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

//    data.map(airport=>{
// return <h3>{airport.code}</h3>,
//     <h3>{airport.city_name}</h3>

//    })

export default SearchResult;
