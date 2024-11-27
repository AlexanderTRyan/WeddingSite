import React, { Component } from "react";
import { Transition } from "react-transition-group";

interface RSVPProps {}

class RSVP extends Component<RSVPProps> {
  handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Handle the change event
  };

  data = {
    name: "Your Name",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    phone: "123-456-7890",
    rsvpMessage: "Please RSVP using the form below:",
    googleFormEmbedUrl: "https://forms.gle/U9iDYMPyXB6ErfXB9", // Replace with your actual Google Form URL
  };

  render() {
    const { rsvpMessage, googleFormEmbedUrl } = this.data;

    return (
      <section id="rsvp">
        <div
          className="row section-head"
          style={{
            transition: "opacity 1000ms ease-in-out",
            opacity: 1, // You can update the state for transition
          }}
        >

          <div className="ten columns">
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                marginTop: "20px",
              }}
            >
              <iframe
                src={googleFormEmbedUrl}
                width="100%"
                height="800px"
                frameBorder="0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RSVP;
