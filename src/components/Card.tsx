import "../styles/Card.css";

function Card({
    title,
    description,
    img,
    link,
}: {
    title: string;
    description: string;
    img: string;
    link: string;
}): JSX.Element {
    return (
        <div className="single-card-container">
            <div className="card-info-container">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className="card-link">
                    <a href={link} target="_blank">
                        More info
                    </a>
                </p>
            </div>
            <div className="card-image-container">
                <a href={link} target="_blank">
                    <img src={img} alt={title} />
                </a>
            </div>
        </div>
    );
}

export default Card;
