import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import { ArrowRight } from './Icons';

import rubyIcon from '../images/ruby-icon.png';
import htmlIcon from '../images/html-icon.png';
import javascriptIcon from '../images/javascript-icon.png';
import cssIcon from '../images/css-icon.png';
import reactIcon from '../images/react-icon.png';
import reduxIcon from '../images/redux-icon.png';
import railsIcon from '../images/rails-icon.png';
import nodejsIcon from '../images/nodejs-icon.png';
import serverlessIcon from '../images/serverless-icon.png';
import postgresqlIcon from '../images/postgresql-icon.png';
import mongodbIcon from '../images/mongodb-icon.png';
import herokuIcon from '../images/heroku-icon.png';
import netlifyIcon from '../images/netlify-icon.png';
import auth0Icon from '../images/auth0-icon.png';
import gitIcon from '../images/git-icon.png';
import githubIcon from '../images/github-icon.png';
import bootstrapIcon from '../images/bootstrap-icon.png';

const Skills = () => {
    const [itemOpened, setItemOpened] = useState(['languages']);

    const accordionItems = [
        {
            id: 'languages',
            title: 'Languages',
            items: [
                {
                    text: 'Javascript',
                    image: javascriptIcon,
                },
                {
                    text: 'HTML',
                    image: htmlIcon,
                },
                {
                    text: 'CSS',
                    image: cssIcon,
                },
                {
                    text: 'Ruby',
                    image: rubyIcon,
                },
            ],
        },
        {
            id: 'frameworks',
            title: 'Frameworks & Tools',
            items: [
                {
                    text: 'React',
                    image: reactIcon,
                },
                {
                    text: 'Redux',
                    image: reduxIcon,
                },
                {
                    text: 'Rails',
                    image: railsIcon,
                },
                {
                    text: 'Node.js',
                    image: nodejsIcon,
                },
                {
                    text: 'PostgreSQL',
                    image: postgresqlIcon,
                },
                {
                    text: 'MongoDB',
                    image: mongodbIcon,
                },
                {
                    text: 'Serverless',
                    image: serverlessIcon,
                },
                {
                    text: 'Heroku',
                    image: herokuIcon,
                },
                {
                    text: 'Netlify',
                    image: netlifyIcon,
                },
                {
                    text: 'Auth0',
                    image: auth0Icon,
                },
                {
                    text: 'Git',
                    image: gitIcon,
                },
                {
                    text: 'Github',
                    image: githubIcon,
                },
                {
                    text: 'Bootstrap',
                    image: bootstrapIcon,
                },
            ],
        },
        {
            id: 'skills',
            title: 'Skills',
            items: [
                {
                    text: 'MVC',
                },
                {
                    text: 'Agile methodologies',
                },
                {
                    text: 'Algorithms',
                },
                {
                    text: 'Data Structures',
                },
                {
                    text: 'Test Driven Development',
                },
                {
                    text: 'Responsive Web Design',
                },
            ],
        },
    ];

    return (
        <div className="skills">
            <Accordion
                preExpanded={['languages']}
                onChange={(uuid) => setItemOpened(uuid)}
            >
                {accordionItems.map((accordion) => (
                    <AccordionItem uuid={accordion.id} key={accordion.id}>
                        <AccordionItemHeading className={`accordion__heading ${itemOpened.includes(accordion.id) ? '' : 'border'}`}>
                            <AccordionItemButton>
                                <span>{accordion.title}</span>

                                <span className={`arrow ${itemOpened.includes(accordion.id) ? 'rotate' : ''}`}>
                                    <ArrowRight />
                                </span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <ul className="items">
                                {accordion.items.map((item) => (
                                    <li key={item.text}>
                                        {item.image && <img src={item.image} alt={item.text} />}

                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Skills;
