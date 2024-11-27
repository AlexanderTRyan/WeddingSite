import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: "20px", backgroundColor: "#f1f1f1", textAlign: "center" }}>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links" style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
          <ul className="copyright" style={{ listStyleType: "none", padding: 0 }}>
            <li>&copy; {new Date().getFullYear()} Alexander & Rachel</li>
          </ul>
        </div>
      </div>
      <div id="go-top" style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <a className="smoothscroll" title="Back to Top" href="#home">
          <i className="icon-up-open"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
