import React, { Component } from "react";
import Zoom from "react-medium-image-zoom";
import { Transition } from "react-transition-group";
import "react-medium-image-zoom/dist/styles.css";

let id = 0;

interface PortfolioProps {
  data: {
    projects: {
      title: string;
      image: string;
    }[];
  };
}

class Portfolio extends Component<PortfolioProps> {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map((project) => {
      let projectImage = "images/portfolio/" + project.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zoom>
              <img alt={project.title} src={projectImage} />
            </Zoom>
            <div style={{ textAlign: "center" }}>{project.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Transition in={true} timeout={1000}>
          {(state) => (
            <div
              className="row"
              style={{
                transition:
                  "opacity 1000ms ease-in-out, transform 1000ms ease-in-out",
                opacity: state === "entered" ? 1 : 0,
                transform:
                  state === "entered" ? "translateX(0)" : "translateX(-40px)",
              }}
            >
              <div className="twelve columns collapsed">
                <h1>Check Out Some of My Works.</h1>

                <div
                  id="portfolio-wrapper"
                  className="bgrid-quarters s-bgrid-thirds cf"
                >
                  {projects}
                </div>
              </div>
            </div>
          )}
        </Transition>
      </section>
    );
  }
}

export default Portfolio;
