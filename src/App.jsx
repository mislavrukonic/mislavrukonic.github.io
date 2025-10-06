import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Education from './components/Education';
import Job from './components/Jobs';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Socials from './components/Socials';
import Footer from './components/Footer';
import LoadingScreen from './components/Loader';
import './App.css';

function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setIsFading(true);

            const removeTimer = setTimeout(() => {
                setIsLoading(false);
            }, 500);

            return () => clearTimeout(removeTimer);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div className="App" id="root">
            {isLoading && <LoadingScreen isFading={isFading} />}
            <Header />
            <main>
                <Hero />
                <About />
                <Education />
                <Job />
                <Portfolio />
                <Skills />
                <Interests />
                <Socials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;