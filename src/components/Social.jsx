import {
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
    AngellistIcon,
    EmailIcon,
} from './Icons';

const Social = () => (
    <>
        <h3 className="connect">
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
    </>
);

export default Social;
