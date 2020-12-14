import React from 'react';
import './home.css';
import Banner from './banner'
import AboutUs from './aboutUs'
// import Card from './Card'
import { Container } from '@material-ui/core';
import Carousel from 'react-bootstrap/esm/Carousel';
import OnlineExperiences from "../Assets/images/Paris.jpg"
import Rio from "../Assets/images/Rio.jpg"
import Canada from "../Assets/images/CanadianRockies.jpg"
import axios from "axios"


function Home() {
    return (
        
        <div className='home'>
            <Banner />
            <Container>
                <Carousel>
                    <Carousel.Item className="slideitem" interval={2000}>
                        <img className= "d-block w-100"
                        src={OnlineExperiences}
                        alt="Online Experiences">
                        </img>
                        <Carousel.Caption>
                            <h3>Search Flights</h3>
                            <p>Get out of town for the weekend to a unique destination.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="slideitem" interval={2000}>
                        <img className= "d-block w-100"
                        src={Rio}
                        alt="Rio">
                        </img>
                        <Carousel.Caption>
                            <h3>Explore the World</h3>
                            <p>Get outside of your comfort zone.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="slideitem" interval={2000}>
                        <img className= "d-block w-100"
                    src={Canada}
                        alt="Canada">
                        </img>
                        <Carousel.Caption>
                            <h3>Relax and Unwind</h3>
                            <p>Unplug from your busy life.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
            </Container>            
            <AboutUs/>
        </div>
    )
}

//Below I inserted an axios call to call on the API. You can either keep it here
//or put this in the places component. Either way, you need to create a search bar
// to pass in a query for this call. Dropdown might work too.
const options = {
  method: 'GET',
  url: 'https://tripadvisor1.p.rapidapi.com/airports/search',
  params: {query: 'los angeles', locale: 'en_US'},
  headers: {
    'x-rapidapi-key': '9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe',
    'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export default Home;
