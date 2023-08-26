import { h, render, Component } from "preact"

export class HeroTopRight extends Component {
    render() {
        return (
            <div className="hero-top-right">
                <div className="frame-projects">
                    <div className="projects-header">
                        <p className="projects-header-text-left">Project Spotlight</p>
                        <p className="projects-header-text-right">info</p>
                        <p className="projects-header-text-right">site 🡥</p>
                    </div>
                    <div className="image-projects" />
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
                    </div>
                </div>
            </div>
        )
    }
}


