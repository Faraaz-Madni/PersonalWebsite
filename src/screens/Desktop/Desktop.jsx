// import React from "react";
import { h, render, Component } from 'preact';

import { Header } from '../../components/Header';
import { HeroTopLeft } from '../../components/HeroTopLeft';
import { HeroTopRight } from '../../components/HeroTopRight';
import { Image } from '../../components/Image';


import Lenis from "@studio-freight/lenis";
import "./style.css";
import { Card } from '../../components/Card';

const lenis = new Lenis()

lenis.on('scroll', (e) => {

})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
// Lenis Setup finish


class Desktop extends Component {

  render() {
    return (
      <div className="desktop">
        <div className="main">
          <Header />
          <div className="hero">
            <HeroTopLeft />
            <div className="frame-hero">
              <HeroTopRight />
              <div className="hero-bottom">
                <Card
                  headerBefore="Low"
                  headerAfter="Carbon 🡓"
                  textBefore="Performant with a minimal impact on the environment."
                  textAfter="Site emits only 0.005g of CO2 emissions per visit. "
                  href="#"
                  icon="♲"
                />
                <Card
                  headerBefore="Up For"
                  headerAfter="Work"
                  textBefore="Performant with a minimal impact on the environment."
                  textAfter="Site emits only 0.005g of CO2 emissions per visit. "
                  href="#"
                  imageEffect={<Image className="card-image" alt="Vector" src="/assets/img/vector.svg" />}

                />
              </div>
            </div>
          </div>

          <div className="frame-bottom">
            <div className="applet-section">
              <div className="holder">
                <div className="applet-text">
                  <div className="change-the-world">change the world.</div>
                </div>

                <div className="frame-arrow">
                  <div className="button-arrow" style={`background-color:var(--color-counter);`}>
                    <p className="text-arrow" style={`color:var(--color);`}> 🡥</p>
                  </div>
                  <div className="applet-icon">⚘</div>
                </div>

              </div>
            </div>
            <div className="blog-section">
              <div className="holder-2">
                <p className="text-wrapper-11">en woto advance some key projects whilecarv</p>
                <div className="frame-blur">

                  <div className="blog-header">
                    <p className="text-large">blog.</p>
                  </div>

                  <div className="frame-arrow">
                    <div className="button-arrow" style={`background-color:var(--color-counter);`}>
                      <p className="text-arrow" style={`color:var(--color);`}> 🡥</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="frame-tech-marquee" />
          <div className="footer" />
        </div>
      </div>
    )
  }
}

render(<Desktop />, document.getElementById("app"));
