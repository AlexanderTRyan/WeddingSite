import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import WeddingInfo from "./components/WeddingInfo";
import "./App.css";
import RSVP from "./components/RSVP";

const App = () => {
  return (
    <>
      <Header
        data={{
          project: "Your Project",
          github: "https://github.com/yourprofile",
          name: "Your Name",
          description: "Your project description goes here.",
        }}
      />
      <About
        data={{
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
          resumedownload: "path/to/resume.pdf",
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
        }}
      />
      <WeddingInfo />
      <RSVP
        data={{
          name: "Your Name",
          address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345",
          },
          phone: "123-456-7890",
          rsvpMessage: "Your RSVP message goes here.",
        }}
      />
      <Footer
        data={{
          social: [
            {
              name: "twitter",
              url: "http://twitter.com",
              className: "fa fa-twitter",
            },
            {
              name: "facebook",
              url: "http://facebook.com",
              className: "fa fa-facebook",
            },
            {
              name: "instagram",
              url: "http://instagram.com",
              className: "fa fa-instagram",
            },
          ],
        }}
      />
    </>
  );
};

export default App;
