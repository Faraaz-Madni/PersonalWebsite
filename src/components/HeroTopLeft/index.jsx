import { h, render, Component } from "preact";
import { Image } from "../Image";
import { ArrowFrame } from "../ArrowFrame";

export class HeroTopLeft extends Component {
    render() {
        return (
            <div className="hero-top-left" >
                <div className="frame-name">
                <Image className="image-name" src="/assets/img/name.svg" alt="Faraaz Madni" />
                <Image className="image-overlay" src="/assets/img/mountain.avif" alt="Image of a mountain" />
                </div>
                <div className="title">
                    <p>Data Engineer. Focused on making the world a better place.</p>
                </div>
                <div className="description">
                    <p className="text-medium">I like data. Tons of data.</p>
                </div>

                <ArrowFrame link="#About"/>


            </div >
        )
    }
}
