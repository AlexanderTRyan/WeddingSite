import React, { Component } from "react";
import { Transition } from "react-transition-group";

const Registry: React.FC = () => {
  // Replace this with your actual Amazon Wedding Registry URL
  const amazonRegistryUrl = "https://www.amazon.com/wedding/registry/registryId"; 

  return (
    <section id="wedding-info" style={{ height: "100vh", transition: "opacity 1s ease" }}>
          <div
            className="row wedding-message"

          >
            <div className="twelve columns">
              <h2>Wedding Registry</h2>
              <p>We are registered at Amazon! Click the link below to view our registry and gifts:</p>

              <p>
                <a
                  href={amazonRegistryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ff9900",
                    fontSize: "18px",
                    textDecoration: "underline",
                  }}
                >
                  Visit our Amazon Wedding Registry
                </a>
              </p>
            </div>
          </div>
    </section>
  );
};

export default Registry;
