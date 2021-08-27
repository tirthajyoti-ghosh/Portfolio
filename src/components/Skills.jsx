import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import skills from '../data/skills';

import { ArrowRightIcon } from './Icons';

const Skills = () => {
    const [itemOpened, setItemOpened] = useState(['languages']);

    return (
        <div className="skills">
            <Accordion
                preExpanded={['languages']}
                onChange={(uuid) => setItemOpened(uuid)}
            >
                {skills.map((accordion) => (
                    <AccordionItem uuid={accordion.id} key={accordion.id}>
                        <AccordionItemHeading className={`accordion__heading ${itemOpened.includes(accordion.id) ? '' : 'border'}`}>
                            <AccordionItemButton>
                                <span>{accordion.title}</span>

                                <span className={`arrow ${itemOpened.includes(accordion.id) ? 'rotate' : ''}`}>
                                    <ArrowRightIcon />
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
