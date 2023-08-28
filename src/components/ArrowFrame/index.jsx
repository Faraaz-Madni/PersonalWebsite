import { h, render, Component } from "preact"

export class ArrowFrame extends Component {
    render(props) {
        return (
            <div className="frame-arrow">
                <a className="button-arrow" href={props.link}>
                    {/* 🡥 */}
                    &uarr;
                </a>
            </div>
        )
    }
}