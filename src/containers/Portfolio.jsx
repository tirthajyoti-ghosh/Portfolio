/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import projects from '../data/projects';
import ProjectModal from '../components/ProjectModal';

const Portfolio = () => {
    const [currentProject, setCurrentProject] = useState();

    // Wake up Heroku dynos
    useEffect(async () => {
        const promises = [
            (async () => {
                await axios.get('https://ghosh-cors-anywhere.herokuapp.com/');
            })(),
            (async () => {
                await axios.get('https://ghosh-cors-anywhere.herokuapp.com/https://tg-appointio.herokuapp.com/apartments');
            })(),
            (async () => {
                await axios.get('https://ghosh-cors-anywhere.herokuapp.com/https://gentle-bastion-08051.herokuapp.com/');
            })(),
        ];

        await Promise.all(promises);
    }, []);

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
