import React from "react";
import "./About.less";

const About: React.FC = () => {

  const data = {
    name: "Your Name",
    image: "img1.jpg",
    bio: "Your bio goes here.",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    phone: "123-456-7890",
    email: "your.email@example.com",
    wedding: {
      date: "June 25, 2023",
      time: "4:00 PM",
      venue: "Beautiful Garden",
      address: "456 Garden St, Anytown, CA 12345",
    },
    reception: {
      date: "June 25, 2023",
      time: "6:00 PM",
      venue: "Grand Hall",
      address: "789 Hall St, Anytown, CA 12345",
    },
  };

  const { name, address, phone, email, wedding, reception } = data;

  return (
    <section
      id="about"
      style={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div className="row">
        <div>
          <h1>Congratulations!</h1>
          <p>You are cordially invited to our wedding celebration!</p>
          <p>
            Please RSVP below to let us know if you can join us on our special day.
          </p>
          <p>We can't wait to see you there!</p>

        </div>
        <div
          className="columns wedding-details"
          style={{
            margin: "10%",
            fontSize: "20px", // Increased font size for wedding details
          }}
        >
          <h1 style={{ fontSize: "30px" }}>Wedding Details</h1>
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
        <div
          className="columns reception-details"
          style={{
            margin: "10%",
            fontSize: "20px", // Increased font size for reception details
          }}
        >
          <h2 style={{ fontSize: "25px" }}>Reception Details</h2>
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
        <div
          className="columns contact-details"
          style={{
            margin: "10%",
            fontSize: "20px", // Increased font size for contact details
          }}
        >
          <h2 style={{ fontSize: "25px" }}>Contact Details</h2>
          <p className="address">
            <span style={{ fontSize: "25px" }}>{name}</span>
            <br />
            <span style={{ fontSize: "20px" }}>
              {address.street}
              <br />
              {address.city} {address.state}, {address.zip}
            </span>
            <br />
            <span style={{ fontSize: "20px" }}>{phone}</span>
            <br />
            <span style={{ fontSize: "20px" }}>{email}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
