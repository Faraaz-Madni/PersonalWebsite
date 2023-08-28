import { h, render, Component } from "preact"

export class Header extends Component {
    render() {
        return (
            <header className="navigation-bar">
                <div className="frame-nav-l">
                    <a className="frame-logo" href="#">
                        <div className="text-wrapper">{'>'}_</div>
                    </a>
                </div>
                <ul className="frame-nav-r">
                    <li className="buttons-navbar"><a href="/about">About</a></li>
                    <li className="buttons-navbar">Services</li>
                    <li className="buttons-navbar">Blog</li>
                    <li className="buttons-navbar">Contact</li>
                </ul>
            </header>
        );
    }
}
