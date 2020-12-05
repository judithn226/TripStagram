import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
import { Container } from '@material-ui/core';
import Carousel from 'react-bootstrap/esm/Carousel';
import OnlineExperiences from "../Assets/images/Travelbackground.jpg"



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
                            <h3>Online Experiences</h3>
                            <p>Unique activities we can do together, led by a world of hosts.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="slideitem" interval={2000}>
                        <img className= "d-block w-100"
                        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg"
                        alt="Unique Stays">
                        </img>
                        <Carousel.Caption>
                            <h3>Unique Stays</h3>
                            <p>Spaces that are more than just a place to sleep.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="slideitem" interval={2000}>
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
            </Container>            
        </div>
    )
}

export default Home