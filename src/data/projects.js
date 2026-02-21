import rimacPhoto from '../assets/rimacrace.png'
import fitwayLogo from '../assets/fitway-04-04 (1).png'
import ttGameJam from '../assets/taltech_gc.png'

const projects = [
    {
        id: 1,
        title: "FitWayHR",
        image: `${fitwayLogo}`,
        description: "Fitness website desinged for a small fitness studio in Zagreb, Croatia",
        link: "https://www.fitwayhr.com/"
    },
    {
        id: 2,
        title: "Rimac RACE",
        image: `${rimacPhoto}`,
        description: "Backend Lead at Bugatti Rimac for Bachelor's Thesis (more info found on my LinkedIn)",
        link: "https://www.linkedin.com/in/mislavrukonic/#projects"
    },
    {
        id: 3,
        title: "Level Designer and Jack of All Trades at TalTech GameJam 2024",
        image: `${ttGameJam}`,
        description: "Konnrad's Unusual Breakfast. Made with Unity.",
        link: "https://lucijaf.itch.io/konnrads-unusual-breakfast"
    },
    {
        id: 4,
        title: "Big Large",
        image: "https://framerusercontent.com/images/5mNcQUnxSYYdKLM7azQ44WDLPYA.jpeg",
        description: "An Event Scheduling Discord Bot (found on my GitHub). Made with NodeJS/TS",
        link: "https://github.com/mislavrukonic/Big-Large"
    },
    {
        id: 5,
        title: "Animal Crossing Wiki",
        image: "https://avatars.githubusercontent.com/u/25446919?v=4",
        description: "A Mobile App for an Animal Crossing: New Horizons API. Built in Kotlin.",
        link: ""
    },
];

export default projects;