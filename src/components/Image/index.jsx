import { h, render, Component } from "preact"

export class Image extends Component {
    render(props) {
        return (
            <img
                className={props.className}
                src={props.src}
                alt={props.alt}
                loading="lazy"
                style="
                content-visibility: auto; 
                "
                decoding="async"
            />
        );
    }
}
