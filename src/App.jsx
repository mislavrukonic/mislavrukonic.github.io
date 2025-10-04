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
        // Function to handle the transition logic
        const handleLoad = () => {
            // Start the fade-out transition immediately after all resources load
            setIsFading(true);

            // After the fade transition time (0.5s from CSS), remove the component
            const removeTimer = setTimeout(() => {
                setIsLoading(false);
            }, 500);

            return () => clearTimeout(removeTimer);
        };

        // If the page is already fully loaded (e.g., if the user is debugging or resources load instantly)
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            // Wait for all external resources (images, fonts, CSS) to load
            window.addEventListener('load', handleLoad);
        }

        // Cleanup function for the event listener
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