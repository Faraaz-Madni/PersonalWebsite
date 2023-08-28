import { h, render, Component } from "preact"
import { Image } from "../Image";
import { ArrowFrame } from "../ArrowFrame";

export class Card extends Component {
    render(props) {
        return (
            <div className="card">
                <p className="card-header text-medium">
                    {props.header}
                    {props.headerBefore} <br />
                    {props.headerAfter}
                </p>
                <p className="card-paragraph text-small">
                    {props.text}
                    {props.textBefore}<br />
                    {props.textAfter}
                </p>

                {/* <div className="frame-arrow">
                    <a className="button-arrow" href={props.link}>
                        🡥
                    </a>
                </div> */}
                <ArrowFrame link={props.link}/>

                <div className="card-icon">
                    {props.icon}

                </div>
                    {props.image}
                    {props.imageEffect}

            </div>
        )
    }
}


