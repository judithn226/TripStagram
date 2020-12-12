import React from 'react';
import './home.css';
import Banner from './banner'
import { Container } from '@material-ui/core';
import Carousel from 'react-bootstrap/esm/Carousel';
import Slider1 from "../Assets/images/Slider1.jpg"
import Slider2 from "../Assets/images/Slider2.jpg"
import Slider3 from "../Assets/images/Slider3.jpg"
import axios from 'axios'



function Home() {
    return (
        <div className='home'>
            <Container>
            <Banner />
            </Container>
            

            {/* <div className='home__section'>
            <Container>
                <Carousel>
                    <Carousel.Item className="slideitem" interval={1500}>
                        <img className= "d-block w-100"
                        src={Slider1}
                        alt="Travel Plans">
                        </img>
                        <Carousel.Caption>
                            <h3>Travel Plans</h3>
                            <p>Plan the travel together, go places you like.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="slideitem" interval={1500}>
                        <img className= "d-block w-100"
                        src={Slider3}
                        alt="Online Experiences">
                        </img>
                        <Carousel.Caption>
                            <h3>Online Experiences</h3>
                            <p>Unique activities we can do together, led by a world of hosts.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="slideitem" interval={1500}>
                        <img className= "d-block w-100"
                        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg"
                        alt="Unique Stays">
                        </img>
                        <Carousel.Caption>
                            <h3>Unique Stays</h3>
                            <p>Spaces that are more than just a place to sleep.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="slideitem" interval={1500}>
                        <img className= "d-block w-100"
                        src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg"
                        alt="Entire Homes">
                        </img>
                        <Carousel.Caption>
                            <h3>Entire Homes</h3>
                            <p>Comfortable private places, with room for friends or family.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
            </Container>             */}
        </div>
    )
};

<<<<<<< HEAD
{/* //Below I inserted an axios call to call on the API. You can either keep it here
=======


//Below I inserted an axios call to call on the API. You can either keep it here
>>>>>>> 12367b97a3ec5b93d88151e4f032392e979634af
//or put this in the places component. Either way, you need to create a search bar
// to pass in a query for this call. Dropdown might work too. */}
{/* const options = {
  method: 'GET',
  url: 'https://tripadvisor1.p.rapidapi.com/airports/search',
  params: {query: 'new york', locale: 'en_US'},
  headers: {
    'x-rapidapi-key': '9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe',
    'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
}); */}

export default Home;
