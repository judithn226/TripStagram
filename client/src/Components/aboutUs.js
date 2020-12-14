import React from "react";
import './aboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="aboutUs">
        <h1>About Us</h1>
        <div class="row">
        <div class="col-md-3">
            <div class="card card-profile card-plain">
                <div class="card-body">
                    <h4 class="card-title">Victoria Blackburn</h4>
                    <h6 class="category text-muted">Web Developer</h6>                    
                </div>
                <div class="card-footer justify-content-center">
                    <a href="https://github.com/victoriablackburn14" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/blackburnvictoria/" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card card-profile card-plain">
                <div class="card-body">
                    <h4 class="card-title">Judy Nwagwu</h4>
                    <h6 class="category text-muted">Web Developer</h6>
                </div>
                <div class="card-footer justify-content-center">
                    <a href="https://github.com/judithn226" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/judith-nwagwu-19655691/" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card card-profile card-plain">
                <div class="card-body">
                    <h4 class="card-title">Usman Chaudhry</h4>
                    <h6 class="category text-muted">Web Developer</h6>
                </div>
                <div class="card-footer justify-content-center">
                    <a href="https://github.com/usmanjchaudhry/" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/monika-kakuturu-3446b261/" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card card-profile card-plain">
                <div class="card-body">
                    <h4 class="card-title">Monika Kakuturu</h4>
                    <h6 class="category text-muted">Web Developer</h6>
                </div>
                <div class="card-footer justify-content-center">
                    <a href="https://github.com/monikakakuturu" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/monika-kakuturu-3446b261/" class="btn btn-link btn-just-icon" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
            </div>
        </div>
        </div>
    </div>
       
  );
}

export default AboutUs;
