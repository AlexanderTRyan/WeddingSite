import React, { Component } from "react";
import { Transition } from "react-transition-group";

interface TestimonialsProps {
  data: {
    testimonials: {
      user: string;
      text: string;
    }[];
  };
}

class Testimonials extends Component<TestimonialsProps> {
  render() {
    if (!this.props.data) return null;

    const testimonials = this.props.data.testimonials.map((testimonial) => {
      return (
        <Transition key={testimonial.user} in={true} timeout={500}>
          {(state) => (
            <li
              style={{
                transition: "opacity 500ms ease-in-out",
                opacity: state === "entered" ? 1 : 0,
              }}
            >
              <blockquote>
                <p>{testimonial.text}</p>
                <cite>{testimonial.user}</cite>
              </blockquote>
            </li>
          )}
        </Transition>
      );
    });

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
