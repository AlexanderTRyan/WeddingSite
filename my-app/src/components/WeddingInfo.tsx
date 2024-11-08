import React, { Component } from "react";
import { Transition } from "react-transition-group";

class WeddingInfo extends Component {
  render() {
    return (
      <section id="wedding-info" style={{ backgroundColor: "#f8f8f8" }}>
        <Transition in={true} timeout={1300}>
          {(state) => (
            <div
              className="row wedding-message"
              style={{
                transition: "opacity 1300ms ease-in-out",
                opacity: state === "entered" ? 1 : 0,
              }}
            >
              <div className="twelve columns">
                <h1>Congratulations!</h1>
                <p>You are cordially invited to our wedding celebration!</p>
                <p>
                  Please RSVP below to let us know if you can join us on our
                  special day.
                </p>
                <p>We can't wait to see you there!</p>
              </div>
            </div>
          )}
        </Transition>
      </section>
    );
  }
}

export default WeddingInfo;
