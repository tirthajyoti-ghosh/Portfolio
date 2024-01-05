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

                <button className="btn" type="button" onClick={() => window.open('https://drive.google.com/file/d/1dlKYHEdXx4_yhNp1Asrez76oye2FlwIN/view?usp=sharing', '_blank')}>
                    Get My Resume
                </button>
            </div>

            <Skills />
        </div>
    </section>
);

export default About;
