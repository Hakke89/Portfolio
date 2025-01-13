import "../styles/About.css";

function About(): JSX.Element {
    return (
        <section className="about-container" id="about">
            <h1 className="about-title">About</h1>
            <div className="about-content">
                <p>
                    Hi, my name is Hannes Vandelaer, and I am a Full Stack
                    Developer based in Holsbeek, Belgium, where I live with my
                    wife and two children.
                </p>
                <p>
                    I completed an full-time training program with VDAB, during
                    which I gained knowledge of PHP, HTML, CSS, and JavaScript.
                    I had the opportunity to put these skills into practice by
                    contributing to the Flemish SCRUM project, which solidified
                    my passion for collaborative teamwork.
                </p>
                <p>
                    I am known for my strong analytical mindset and
                    detail-oriented approach, which enable me to contribute to
                    the successful completion of complex projects within a team
                    environment. My curiosity and enthusiasm for learning drive
                    me to continuously improve my skills, whether by exploring
                    new programming languages online or learning from
                    colleagues.
                </p>
                <p>
                    I'm passionate about creating high-quality, efficient
                    solutions and thrive in dynamic, team-focused environments.
                </p>

                <h3>Technical Skills</h3>

                <ul>
                    <li>PHP</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Laravel</li>
                    <li>React</li>
                </ul>
            </div>
        </section>
    );
}

export default About;
