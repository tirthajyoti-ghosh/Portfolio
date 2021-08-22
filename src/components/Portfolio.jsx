/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import appointioImg from '../images/appointio.png';
import animexImg from '../images/animex.png';
import jobListingsImg from '../images/job-listing.png';
// import battleOfGrandiaImg from '../images/battle-of-grandia.png';
import roomMeterImg from '../images/room-meter.png';
import ProjectModal from './ProjectModal';
// import jobScraperImg from '../images/freelance-job-scraper.png';

const Portfolio = () => {
    const [currentProject, setCurrentProject] = useState();

    // Wake up Heroku dynos
    useEffect(async () => {
        const promises = [
            (async () => {
                await axios.get('https://tg-appointio.herokuapp.com/apartments');
            })(),
            (async () => {
                await axios.get('https://ghosh-cors-anywhere.herokuapp.com/');
            })(),
            (async () => {
                await axios.get('https://ghosh-cors-anywhere.herokuapp.com/https://gentle-bastion-08051.herokuapp.com/');
            })(),
        ];

        await Promise.all(promises);
    }, []);

    const projects = [
        {
            id: 'animex',
            name: 'Animex',
            description: 'This is a single page application which allows users to browse and view a catalog of anime series and movies. Built with React/Redux.',
            type: 'Front End',
            date: '2020',
            image: animexImg,
            liveLink: 'https://ghosh-animex.netlify.app/',
            sourceLink: 'https://github.com/tirthajyoti-ghosh/Animex',
            tags: ['react/redux', 'sass', 'rest api', 'react router', 'netlify'],
        },
        {
            id: 'appointio',
            name: 'Appointio',
            description: 'This is a single-page tablet web app for users to schedule an apartment tour before renting. The list of apartments is sorted by type for users to browse through. Built with React/Redux on the front-end and Rails on the back-end.',
            type: 'Full Stack',
            date: '2020',
            image: appointioImg,
            liveLink: 'https://ghosh-appointio.netlify.app/',
            sourceLink: 'https://github.com/tirthajyoti-ghosh/Appointio',
            tags: ['react/redux', 'sass', 'ruby on rails', 'react-router', 'netlify', 'heroku'],
        },
        {
            id: 'job-listings',
            name: 'Job Listings',
            description: 'A Single Page Application that allows users to search for jobs or people by skill. Consumes Torre APIs.',
            type: 'Front End',
            date: '2021',
            image: jobListingsImg,
            liveLink: 'https://ghosh-job-listings.netlify.app/',
            sourceLink: 'https://github.com/tirthajyoti-ghosh/job-listing/tree/job-listing',
            tags: ['react/redux', 'sass', 'rest api', 'react router', 'netlify'],
        },
        // {
        //     id: 'battle-of-grandia',
        //     name: 'Battle Of Grandia',
        //     description: 'An adventure RPG game built with Javascript and Phaser3.',
        //     type: 'Front End',
        //     date: '2020',
        //     image: battleOfGrandiaImg,
        //     liveLink: 'https://thawing-river-75700.herokuapp.com/',
        //     sourceLink: 'https://github.com/tirthajyoti-ghosh/Battle-of-Grandia',
        //     tags: ['javascript', 'phaser3', 'game physics', 'es6', 'module pattern', 'heroku'],
        // },
        {
            id: 'room-meter',
            name: 'Room Meter',
            description: "Room Meter is a hotel review site where users can create reviews in forms of articles and vote for other reviews. It's built with Ruby on Rails framework, following the MVP pattern.",
            type: 'Full Stack',
            date: '2020',
            image: roomMeterImg,
            liveLink: 'https://gentle-bastion-08051.herokuapp.com/',
            sourceLink: 'https://github.com/tirthajyoti-ghosh/Room-Meter',
            tags: ['html', 'css', 'ruby on rails', 'mvp pattern', 'heroku'],
        },
        // {
        //     id: 'freelance-job-scraper',
        //     name: 'Freelance Job Scraper',
        //     description: 'A data scraper built using OOP in Ruby. It takes keywords from the user input, scrapes 3 job sites and exports them to 3 separate CSV files.',
        //     type: 'Back End',
        //     date: '2020',
        //     image: jobScraperImg,
        //     liveLink: 'https://bit.ly/32BaInI',
        //     sourceLink: 'https://github.com/tirthajyoti-ghosh/freelance-job-scraper',
        //     tags: ['ruby', 'rubygems'],
        // },
    ];

    return (
        <section className="portfolio" id="portfolio">
            {projects.map((project, index) => (
                <div className="project" key={project.id}>
                    <div className={`img ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                        <img src={project.image} alt={project.name} />
                    </div>

                    <div className={`details ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                        <h1>{project.name}</h1>

                        <ul className="info">
                            <li>{project.type}</li>
                            <li className="circle">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
                                </svg>
                            </li>
                            <li>{project.date}</li>
                        </ul>

                        <p>{project.description}</p>

                        <ul className="tags">
                            {project.tags.slice(0, 3).map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>

                        <button className="btn" type="button" onClick={() => setCurrentProject(project)}>
                            See Project
                        </button>
                    </div>
                </div>
            ))}

            {currentProject && <ProjectModal project={currentProject} setCurrentProject={setCurrentProject} />}
        </section>
    );
};

export default Portfolio;
