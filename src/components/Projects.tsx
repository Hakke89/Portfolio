import "../styles/Projects.css";
import Card from "./Card";
import image1 from "../assets/treasurehunter.png";
import image2 from "../assets/pixelart.png";
import image3 from "../assets/swordwarrior.png";

function Projects(): JSX.Element {
    // array of projects with title, description, image, project link, and code link
    const projects = [
        {
            title: "Treasure Hunter",
            description:
                "A pirate theme game made with html, css and javascript",
            img: image1,
            projectLink: "https://treasurehunter-hv.netlify.app",
            codeLink: "https://github.com/Hakke89/treasurehunter",
        },
        {
            title: "Pixel Art",
            description: "Javascript project for drawing pixel art",
            img: "https://picsum.photos/400/300",
            projectLink: "https://netlify.com",
            codeLink: "https://github.com/Hakke89/",
        },
        {
            title: "Sword Warrior",
            description:
                "A small project made in Typscript with Phaser and Vite",
            img: image3,
            projectLink: "https://netlify.com",
            codeLink: "https://github.com/Hakke89",
        },
    ];

    return (
        <section className="projects-container" id="projects">
            <h1 className="projects-title">Projects</h1>
            {projects.map((project, index) => (
                <Card key={index} {...project} />
            ))}
        </section>
    );
}

export default Projects;
