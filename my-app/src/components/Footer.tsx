import React from "react";
import { Transition } from "react-transition-group";

interface FooterProps {
  data: {
    social: Array<{ name: string; url: string; className: string }>;
  };
}

class Footer extends React.Component<FooterProps> {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map((network) => {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Transition in={true} timeout={500}>
            {(state) => (
              <div
                className="twelve columns"
                style={{
                  transition: "opacity 500ms ease-in-out",
                  opacity: state === "entered" ? 1 : 0,
                }}
              >
                <ul className="social-links">{networks}</ul>

                <ul className="copyright">
                  <li>&copy; Copyright 2021 Nordic Giant</li>
                  <li>
                    Design by{" "}
                    <a title="Styleshout" href="http://www.styleshout.com/">
                      Styleshout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </Transition>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
