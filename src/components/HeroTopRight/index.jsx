import { h, render, Component } from "preact"
import { Image } from "../Image";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export class HeroTopRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
        };
    }

    toggleInfo = () => {
        this.setState((prevState) => ({
            showInfo: !prevState.showInfo,
        }));
    };
    render() {
        const { showInfo } = this.state;

        return (
            <div className="hero-top-right">
                <div className="frame-projects">
                    <div className="projects-header">
                        <p className="projects-header-text-left">Project Spotlight</p>
                        <p className="projects-header-text-right clickable" onClick={this.toggleInfo}>info</p>
                        <p className="projects-header-text-right clickable">site 🡥</p>
                    </div>

                    <div
                        className="frame-image-projects"
                        id="image-projects" data-lenis-prevent>
                        {/* Images here */}
                        {showInfo && <div className="project-info">
                            <h1> Project CrimeWatch<span className="blinkingCursor">_</span> </h1>

                            <h2>✧ What is it? </h2>
                            <p className="text-small"> ProjectCrimewatchKE will be a website that takes crime data from Kenyan news websites and displays crime (by day, week, month, year) on an interactive map. </p>

                            <h2>✧ Considerations</h2>
                            <ul className="text-small">
                                <li>Respecting each site's robots.txt and not  overloading sites we scrape from.</li>
                                <li>Lightweight delivery</li>
                                <li>Accessibility</li>
                                <li>Data protection, encryption</li>
                            </ul>
                        </div>}
                        {!showInfo && <div className="frame-image-projects-2">
                        <Image alt="'Crimewatch' is written alongside a map of Kenya." className="image-projects" src="/assets/img/CrimeWatchLogo.avif"/>
                        <Image alt="'Crimewatch' is written alongside a map of Kenya." className="image-projects" src="/assets/img/CrimeWatchLogo.webp"/>

                        </div>
                        }
                    </div>

                    <div className="marquee-projects">
                        <ul className="marquee-projects-text">
                            <li>CRIMEWATCH</li>
                            <li>✧</li>
                        </ul>
                        <ul className="marquee-projects-text">
                            <li>CRIMEWATCH</li>
                            <li>✧</li>
                        </ul>
                        <ul className="marquee-projects-text">
                            <li>CRIMEWATCH</li>
                            <li>✧</li>
                        </ul>
                        <ul className="marquee-projects-text">
                            <li>CRIMEWATCH</li>
                            <li>✧</li>
                        </ul>
                        <ul className="marquee-projects-text">
                            <li>CRIMEWATCH</li>
                            <li>✧</li>
                        </ul>
                    </div>
                </div>
                </div>
                )
    }
}


