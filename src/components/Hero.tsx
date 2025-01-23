import "../styles/Hero.css";

function Hero(): JSX.Element {
    return (
        <section className="hero" id="hero">
            <h1>
                Hello, I'm <span>Hannes</span>.
            </h1>
            <h2>I'm a full stack web developer</h2>
        </section>
    );
}

export default Hero;
