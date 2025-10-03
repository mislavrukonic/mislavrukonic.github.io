import React from 'react';
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
import './App.css';

function App() {
    return (
        <div className="App">
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
        </div>
    );
}

export default App;