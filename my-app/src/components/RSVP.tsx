import React, { Component } from "react";
import { Transition } from "react-transition-group";

interface RSVPProps {
  data: {
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    phone: string;
    rsvpMessage: string;
  };
}

class RSVP extends Component<RSVPProps> {
  handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Handle the change event
  };

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.rsvpMessage;

    return (
      <section id="rsvp" style={{ justifyContent: "center" }}>
        <Transition in={true} timeout={1000}>
          {(state) => (
            <div
              className="row section-head"
              style={{
                transition: "opacity 1000ms ease-in-out",
                opacity: state === "entered" ? 1 : 0,
              }}
            >
              <div className="two columns header-col">
                <h1>
                  <span>RSVP</span>
                </h1>
              </div>

              <div className="ten columns">
                <p className="lead">{message}</p>
              </div>
            </div>
          )}
        </Transition>

        <div className="row">
          <Transition in={true} timeout={1000}>
            {(state) => (
              <div
                className="eight columns"
                style={{
                  transition: "transform 1000ms ease-in-out",
                  transform:
                    state === "entered" ? "translateX(0)" : "translateX(-100%)",
                }}
              >
                <form action="" method="post" id="rsvpForm" name="rsvpForm">
                  <fieldset>
                    <div>
                      <label htmlFor="rsvpName">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        size={35}
                        id="rsvpName"
                        name="rsvpName"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="rsvpEmail">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        size={35}
                        id="rsvpEmail"
                        name="rsvpEmail"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="rsvpGuests">
                        Number of Guests Include Yourself
                        <span className="required">*</span>
                      </label>
                      <input
                        type="number"
                        defaultValue=""
                        size={35}
                        id="rsvpGuests"
                        name="rsvpGuests"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <button className="submit">Submit</button>
                      <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                      </span>
                    </div>
                  </fieldset>
                </form>

                <div id="message-warning"> Error boy</div>
                <div id="message-success">
                  <i className="fa fa-check"></i>Your RSVP was sent, thank you!
                  <br />
                </div>
              </div>
            )}
          </Transition>
        </div>
      </section>
    );
  }
}

export default RSVP;
