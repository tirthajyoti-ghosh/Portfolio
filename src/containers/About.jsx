/* eslint-disable max-len */
import Skills from '../components/Skills';
import Social from '../components/Social';

const About = () => (
    <section className="about" id="about">
        <div className="content">
            <div className="text">
                <h1>
                    About
                    <br />
                    Myself
                </h1>

                <p>
                    Hello I’m a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
                </p>

                <Social />

                <button className="btn" type="button" onClick={() => window.open('https://docs.google.com/document/d/1UWZDRxFhXrHgj-SmyL2hgXVnE_Zfh5FThPayeqreOcM/edit?usp=sharing', '_blank')}>
                    Get My Resume
                </button>
            </div>

            <Skills />
        </div>
    </section>
);

export default About;
