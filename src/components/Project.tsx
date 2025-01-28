import React from "react";
import mock01 from '../assets/images/Screenshot3.png';
import mock02 from '../assets/images/Screenshot5.png';
import mock03 from '../assets/images/Screenshot8.png';
import mock04 from '../assets/images/Screenshot7.png';
import mock05 from '../assets/images/Screenshot6.png';
import novellearn from '../assets/images/novellearn.png';
import screenshot from '../assets/images/screenshot.png';
import shot0 from '../assets/images/Screenshot0.png';
import medi from '../assets/images/medi.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/LosharHammond/Portfolio" target="_blank" rel="noreferrer"><img src={screenshot} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LosharHammond/Portfolio" target="_blank" rel="noreferrer"><h2>My Portfolio</h2></a>
                <p>A personal portfolio website showcasing my skills, expertise, and projects. Built with React.js and modern tools, it reflects a clean, responsive, and professional design.</p>
            </div>
             <div className="project">
                <a href="https://github.com/LosharHammond/Medicare-Connect-App" target="_blank" rel="noreferrer"><img src={medi} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LosharHammond/Medicare-Connect-App" target="_blank" rel="noreferrer"><h2>MediCare Mobile App</h2></a>
                <p>A comprehensive healthcare app designed to predict diseases, manage medical reports, and connect users with practitioners. Features include a feedback platform, real-time chat, and Firebase integration for secure data storage.</p>
            </div>
            <div className="project">
                <a href="https://github.com/LosharHammond/NovelLearn" target="_blank" rel="noreferrer"><img src={novellearn} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LosharHammond/NovelLearn" target="_blank" rel="noreferrer"><h2>NovelLearn: We entertain to learn</h2></a>
                <p>A React.js-based educational app that combines entertainment and learning by offering books and educational resources in a novel-like online format.</p>
            </div>
            <div className="project">
                <a href="https://github.com/LosharHammond/Inventory-Manager" target="_blank" rel="noreferrer"><img src={shot0} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LosharHammond/Inventory-Manager" target="_blank" rel="noreferrer"><h2>Inventory Manager</h2></a>
                <p>A web app for tracking consumable and non-consumable items in organizations. Features include an intuitive interface for managing inventory, persistence with local storage, and dynamic item editing.</p>
            </div>
            <div className="project">
                <a href="https://github.com/LosharHammond/Artboard" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LosharHammond/Artboard" target="_blank" rel="noreferrer"><h2>Bhromaon: Front-End Design</h2></a>
                <p>A travel-focused app that helps users explore destinations, plan trips, and share their experiences. Includes real-time recommendations and user-generated content.</p>
            </div>
            <div className="project">
                <a href="https://github.com/LosharHammond/Genesis-Webpage-Front-End-" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LosharHammond/Genesis-Webpage-Front-End-" target="_blank" rel="noreferrer"><h2>Genesis:Front-End</h2></a>
                <p>A creative project management tool aimed at organizing and streamlining workflows for teams and individuals. Built with React.js and Firebase for seamless collaboration.</p>
            </div>
            <div className="project">
                <a href="https://github.com/LosharHammond/Productly-website-frond-end" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LosharHammond/Productly-website-frond-end" target="_blank" rel="noreferrer"><h2>Productly:Front-End</h2></a>
                <p>A productivity app designed to manage tasks, set reminders, and boost efficiency. Built with a user-centric design for individuals and teams.</p>
            </div>
            <div className="project">
                <a href="https://github.com/LosharHammond/Profile" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LosharHammond/Profile" target="_blank" rel="noreferrer"><h2>My Page</h2></a>
                <p>A simple and dynamic personal web page featuring essential information, updates, and links to my work, designed to be engaging and easy to navigate.</p>
            </div>
            <div className="project">
                <a href="https://github.com/LosharHammond/LetTour" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LosharHammond/LetTour" target="_blank" rel="noreferrer"><h2>LetTour</h2></a>
                <p>"LetTour" is a tourism web app showcasing travel destinations, activities, and experiences. It allows users to discover and explore new places, read reviews, and plan their trips, making it a valuable tool for travelers. This project demonstrates your skills in building intuitive and functional web applications.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;