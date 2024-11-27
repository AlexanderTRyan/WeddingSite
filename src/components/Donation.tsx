import React, { Component } from "react";
import { Transition } from "react-transition-group";

const Donation: React.FC = () => {
  // Replace this with your actual PayPal donation link
  const paypalDonationUrl = "https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID";

  return (
    <section id="donation" style={{ height: "100vh", transition: "opacity 1s ease" }}>
      <Transition in={true} timeout={1300}>
        {(state) => (
          <div
            className="row donation-message"
            style={{
              transition: "opacity 1300ms ease-in-out",
              opacity: state === "entered" ? 1 : 0,
            }}
          >
            <div className="twelve columns">
              <h1>Honeymoon Fund</h1>
              <p>
                Your presence at our wedding is a gift in itself, but if you'd like to contribute
                towards our honeymoon fund, we would greatly appreciate it! Your donation will help
                us create unforgettable memories as we start this new chapter in our lives.
              </p>
              <p>
                Please use the button below to donate through PayPal. Thank you for your generosity!
              </p>

              <p>
                <a
                  href={paypalDonationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#0070ba",
                    color: "#fff",
                    padding: "12px 20px",
                    fontSize: "16px",
                    textDecoration: "none",
                    borderRadius: "8px",
                  }}
                >
                  Donate to Our Honeymoon Fund
                </a>
              </p>
            </div>
          </div>
        )}
      </Transition>
    </section>
  );
};

export default Donation;
