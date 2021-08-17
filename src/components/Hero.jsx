/* eslint-disable max-len */
import {
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
    AngellistIcon,
    EmailIcon,
} from './Icons';

const Hero = () => (
    <section className="hero">
        <div className="text">
            <h1>
                I’m Ghosh
                <br />
                Glad to see you!
            </h1>

            <h2>
                I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
            </h2>

            <h3>
                LET’S CONNECT
            </h3>

            <ul className="icons">
                <li>
                    <a href="https://github.com/tirthajyoti-ghosh" target="_blank" rel="noreferrer">
                        <GithubIcon />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/tirthajyoti-ghosh/" target="_blank" rel="noreferrer">
                        <LinkedinIcon />
                    </a>
                </li>
                <li>
                    <a href="https://angel.co/u/tirthajyoti-ghosh" target="_blank" rel="noreferrer">
                        <AngellistIcon />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/terrific_ghosh" target="_blank" rel="noreferrer">

                        <TwitterIcon />
                    </a>
                </li>
                <li>
                    <a href="mailto:t.ghosh.me@gmail.com" target="_blank" rel="noreferrer">
                        <EmailIcon />
                    </a>
                </li>
            </ul>
        </div>
    </section>
);

export default Hero;
