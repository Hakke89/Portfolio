import "../styles/Card.css";

function Card({
    title,
    description,
    img,
    projectLink,
    codeLink,
}: {
    title: string;
    description: string;
    img: string;
    projectLink: string;
    codeLink: string;
}): JSX.Element {
    return (
        <div className="single-card-container">
            <div className="card-info-container">
                <h2 className="card-title">{title}</h2>

                <p>{description}</p>
                <div className="link-container background-transform">
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Project
                    </a>
                </div>
                <div className="link-container background-transform">
                    <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Source Code
                    </a>
                </div>
            </div>
            <div className="card-image-container">
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <img src={img} alt={title} />
                </a>
            </div>
        </div>
    );
}

export default Card;
