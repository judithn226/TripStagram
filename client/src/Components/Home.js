
import React, { useState, useEffect} from "react";
import './Home.css';
import Header from "./header";
import Banner from './Banner'
import AboutUs from './aboutUs'
// import Card from './Card'
import { Container } from '@material-ui/core';
import Carousel from 'react-bootstrap/esm/Carousel';
import OnlineExperiences from "../Assets/images/Paris.jpg"
import Rio from "../Assets/images/Rio.jpg"
import Canada from "../Assets/images/CanadianRockies.jpg"
import NewYork from "../Assets/images/NewYork.jpg"
import Mexico from "../Assets/images/mexico.jpg"
import lasVegas from "../Assets/images/las-vegas-welcome-sign.jpg"
import disney from "../Assets/images/Disneyland.jpg"
//import axios from "axios"

import './aboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';



function Home(props) {

    // useEffect(()=>{
    //     const [searchResults, setSearchResults] = useState([])
    //     setSearchResults([0,1,3,4]);
    //     console.log(searchResults);
    // })
    
    return (
        
        <div className='home'>
            <Header/>
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
            <h3 className = "extraStuff">    
                Destinations Travelers Love
                </h3>   


    <div class="row">
        <div class="col-md-3">
            {/* <div class="card card-profile card-plain"> */}
                <div class="card-body">
                <a href = "https://www.nycgo.com/">
                <img className="imaage1" src={NewYork} alt="" />  
                <h4 class="card-title">New York CIty, NY</h4>   
                </a>            
                </div>
                {/* <div class="card-footer justify-content-center">
                    <a href="https://github.com/victoriablackburn14" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                   
                </div> */}
            {/* </div> */}
        </div>
        <div class="col-md-3">
            {/* <div class="card card-profile card-plain"> */}
                <div class="card-body">
                    <a href = "https://www.nomadicmatt.com/travel-guides/mexico-travel-tips/">
                <img className="imaage1" src={Mexico} alt="" /> 
                    <h4 class="card-title">Mexico</h4>
                    </a>
                </div>
                {/* <div class="card-footer justify-content-center">
                    <a href="https://github.com/judithn226" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/judith-nwagwu-19655691/" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div> */}
            {/* </div> */}
        </div>
        <div class="col-md-3">
            {/* <div class="card card-profile card-plain"> */}
                <div class="card-body">
                <a href = "https://www.visitlasvegas.com/">
                <img className="imaage1" src={lasVegas} alt="" /> 
                    <h4 class="card-title">Las Vegas, NV</h4>
                    </a>
                </div>
                {/* <div class="card-footer justify-content-center">
                    <a href="https://github.com/usmanjchaudhry/" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/monika-kakuturu-3446b261/" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div> */}
            {/* </div> */}
        </div>
        <div class="col-md-3">
            {/* <div class="card card-profile card-plain"> */}
                <div class="card-body">
                <a href = "https://www.visitorlando.com/en">
                <img className="imaage1" src={disney} alt="" /> 
                    <h4 class="card-title" href="google.com">Orlando, FL</h4>
                    </a>
                </div>
                {/* <div class="card-footer justify-content-center">
                    <a href="https://github.com/monikakakuturu" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/monika-kakuturu-3446b261/" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div> */}
            {/* </div> */}
        </div>
        </div>
            {/* <AboutUs/> */}
            <div class="footer">
  <p>Footer</p>
</div>
        </div>
        
    )
}

//Below I inserted an axios call to call on the API. You can either keep it here
//or put this in the places component. Either way, you need to create a search bar
// to pass in a query for this call. Dropdown might work too.

=======
const options = {
  method: 'GET',
  url: 'https://tripadvisor1.p.rapidapi.com/airports/search',
  params: {query: 'los angeles', locale: 'en_US'},
  headers: {
    'x-rapidapi-key': '9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe',
    'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
    "useQueryString": true
  }
};
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


// console.log(searchBar);

// const options = {
//     method: 'GET',
//     url: 'https://tripadvisor1.p.rapidapi.com/airports/search',
//     params: {query: 'los angeles', locale: 'en_US'},
//     headers: {
//       'x-rapidapi-key': '9f05d26673mshb2c8499547bc2c5p1c9aafjsn197659763efe',
//       'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });
export default Home;
