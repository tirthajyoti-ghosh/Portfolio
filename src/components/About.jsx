/* eslint-disable max-len */
import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import { ArrowRight } from './Icons';
import Social from './Social';

import rubyIcon from '../images/ruby-icon.png';
import htmlIcon from '../images/html-icon.png';
import javascriptIcon from '../images/javascript-icon.png';
import cssIcon from '../images/css-icon.png';

const About = () => {
    const [itemOpened, setItemOpened] = useState(['language']);

    return (
        <section className="about" id="about">
            <div className="content">
                <div className="text">
                    <h1>
                        About
                        <br />
                        Myself
                    </h1>

                    <p>
                        Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
                    </p>

                    <Social />

                    <button type="button">
                        Get My Resume
                    </button>
                </div>

                <div className="skills">
                    <Accordion
                        preExpanded={['language']}
                        onChange={(uuid) => setItemOpened(uuid)}
                    >
                        <AccordionItem uuid="language">
                            <AccordionItemHeading className={`accordion__heading ${itemOpened.includes('language') ? '' : 'border'}`}>
                                <AccordionItemButton>
                                    <span>Languages</span>

                                    <span className={`arrow ${itemOpened.includes('language') ? 'rotate' : ''}`}>
                                        <ArrowRight />
                                    </span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <ul>
                                    <li>
                                        <img src={javascriptIcon} alt="" />

                                        Javascript
                                    </li>
                                    <li>
                                        <img src={htmlIcon} alt="" />

                                        HTML
                                    </li>
                                    <li>
                                        <img src={cssIcon} alt="" />

                                        CSS
                                    </li>
                                    <li>
                                        <img src={rubyIcon} alt="" />

                                        Ruby
                                    </li>
                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="frameworks">
                            <AccordionItemHeading className={`accordion__heading ${itemOpened.includes('frameworks') ? '' : 'border'}`}>
                                <AccordionItemButton>
                                    <span>Frameworks & Tools</span>

                                    <span className={`arrow ${itemOpened.includes('frameworks') ? 'rotate' : ''}`}>
                                        <ArrowRight />
                                    </span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="skills">
                            <AccordionItemHeading className={`accordion__heading ${itemOpened.includes('skills') ? '' : 'border'}`}>
                                <AccordionItemButton>
                                    <span>Skills</span>

                                    <span className={`arrow ${itemOpened.includes('skills') ? 'rotate' : ''}`}>
                                        <ArrowRight />
                                    </span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default About;
