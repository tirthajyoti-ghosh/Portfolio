import About from './containers/About';
import Contact from './containers/Contact';
import Hero from './containers/Hero';
import Navbar from './components/Navbar';
import Portfolio from './containers/Portfolio';
import './styles/App.scss';

const App = () => (
    <>
        <Navbar />
        <main>
            <Hero />
            <Portfolio />
            <About />
            <Contact />
        </main>
    </>
);

export default App;
