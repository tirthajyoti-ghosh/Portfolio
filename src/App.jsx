import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import './styles/App.scss';

const App = () => (
    <>
        <Navbar />
        <main>
            <Hero />
            <Portfolio />
        </main>
    </>
);

export default App;
