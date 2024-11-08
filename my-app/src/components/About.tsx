import React, { Component } from "react";
import { Transition } from "react-transition-group";
import "./About.less";

interface AboutProps {
  data: {
    name: string;
    image: string;
    bio: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    phone: string;
    email: string;
    resumedownload: string;
    wedding: {
      date: string;
      time: string;
      venue: string;
      address: string;
    };
    reception: {
      date: string;
      time: string;
      venue: string;
      address: string;
    };
  };
}

class About extends Component<AboutProps> {
  render() {
    if (!this.props.data) return null;

    const { name, address, phone, email, wedding, reception } = this.props.data;

    return (
      <section id="about">
        <Transition in={true} timeout={1000}>
          {(state) => (
            <div
              className="row"
              style={{
                opacity: state === "entered" ? 1 : 0,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <div className="columns wedding-details">
                <h2>Wedding Details</h2>
                <p>
                  <strong>Date:</strong> {wedding.date}
                  <br />
                  <strong>Time:</strong> {wedding.time}
                  <br />
                  <strong>Venue:</strong> {wedding.venue}
                  <br />
                  <strong>Address:</strong> {wedding.address}
                </p>
              </div>
              <div className="columns reception-details">
                <h2>Reception Details</h2>
                <p>
                  <strong>Date:</strong> {reception.date}
                  <br />
                  <strong>Time:</strong> {reception.time}
                  <br />
                  <strong>Venue:</strong> {reception.venue}
                  <br />
                  <strong>Address:</strong> {reception.address}
                </p>
              </div>
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {address.street}
                    <br />
                    {address.city} {address.state}, {address.zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
            </div>
          )}
        </Transition>
      </section>
    );
  }
}

export default About;
