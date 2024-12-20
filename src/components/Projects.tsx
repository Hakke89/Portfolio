import "../styles/Projects.css";
import Card from "./Card";

function Projects(): JSX.Element {
    // array of projects with title, description and image
    const projects = [
        {
            title: "Treasure hunter",
            description: "project made with html, css and javascript",
            img: "https://picsum.photos/400/300",
            link: "https://github.com/Hakke89",
        },
        {
            title: "Project 2",
            description: "project made with html, css and javascript",
            img: "https://picsum.photos/400/300",
            link: "https://github.com/Hakke89",
        },
        {
            title: "Project 3",
            description: "project made with html, css and javascript",
            img: "https://picsum.photos/400/300",
            link: "https://github.com/Hakke89",
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
