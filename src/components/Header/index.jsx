import { h, render, Component } from "preact"

export class Header extends Component {
    render() {
        return (
            <header className="navigation-bar">
                <div className="frame-nav-l">
                    <a className="frame-logo" href="#">
                        <div className="text-wrapper" >{'>'}_</div>
                    </a>
                </div>
                <div className="frame-nav-r">
                <ul>
                    <li className="buttons-navbar clickable"><a className="text-small" href="/about">About</a></li>
                    <li className="buttons-navbar clickable"><a className="text-small" href="/services">Services</a></li>
                    <li className="buttons-navbar clickable"><a className="text-small" href="/blog">Blog</a></li>
                    <li className="buttons-navbar clickable"><a className="text-small" href="/contact">Contact</a></li>
                </ul>
                </div>
            </header>
        );
    }
}
