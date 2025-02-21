import "../styles/Navigation.css";
import { useState, useEffect } from "react";

/**
 * The Navigation component renders a navigation bar that marks the
 * active section on scroll.
 *
 * It uses the useState hook to keep track of the active section and
 * the useEffect hook to attach a scroll event listener to the window.
 *
 * The component renders an unordered list with links to the sections
 * and sets the 'active' class on the active section.
 */

function Navigation(): JSX.Element {
    const [active, setActive] = useState<string>("hero");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollY = window.scrollY;

            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 200;
                const sectionId = current.getAttribute("id");

                if (
                    scrollY >= sectionTop &&
                    scrollY < sectionTop + sectionHeight
                ) {
                    sectionId && setActive(sectionId);
                }
            });
        };

        // Attach scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="navigation-bar">
            <ul className="navigation">
                <li className={`nav-item ${active === "hero" ? "active" : ""}`}>
                    <a href="#">Home</a>
                </li>
                <li
                    className={`nav-item ${active === "about" ? "active" : ""}`}
                >
                    <a href="#about">About</a>
                </li>
                <li
                    className={`nav-item ${
                        active === "projects" ? "active" : ""
                    }`}
                >
                    <a href="#projects">Projects</a>
                </li>
                <li
                    className={`nav-item ${
                        active === "contact" ? "active" : ""
                    }`}
                >
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
