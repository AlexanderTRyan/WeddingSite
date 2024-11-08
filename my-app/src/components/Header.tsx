import React, { Component } from "react";
import { Button } from "antd";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.less";

interface HeaderProps {
  data: {
    project: string;
    github: string;
    name: string;
    description: string;
  };
}

interface HeaderState {
  isScrolled: boolean;
  currentImageIndex: number;
}

class Header extends Component<HeaderProps, HeaderState> {
  headerRef: React.RefObject<HTMLDivElement>;
  imageInterval: NodeJS.Timeout | null = null;

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isScrolled: false,
      currentImageIndex: 0,
    };
    this.headerRef = React.createRef();
  }

  componentDidMount() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            this.setState({ isScrolled: true });
          } else {
            this.setState({ isScrolled: false });
          }
        });
      },
      { threshold: 0 }
    );

    if (this.headerRef.current) {
      observer.observe(this.headerRef.current);
    }

    this.imageInterval = setInterval(this.nextImage, 3000); // Change image every 3 seconds
  }

  componentWillUnmount() {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }

  nextImage = () => {
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % 6, // Assuming there are 6 images
    }));
  };

  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;

    const images = [
      "images/photo1.jpg",
      "images/photo2.jpg",
      "images/photo3.jpg",
      "images/photo4.jpg",
      "images/photo5.jpg",
      "images/photo6.jpg",
    ];

    const prevImageIndex =
      (this.state.currentImageIndex - 1 + images.length) % images.length;
    const nextImageIndex = (this.state.currentImageIndex + 1) % images.length;

    return (
      <>
        <div
          className="parantdiv"
          ref={this.headerRef}
          style={{ height: "100vh", width: "300%", position: "relative" }}
        >
          <div
            className="image-container"
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              left: "-100%",
            }}
          >
            <div
              className="image-wrapper"
              style={{ flex: "1 0 20%", height: "100%" }}
            >
              <img
                src={images[prevImageIndex]}
                alt={`${prevImageIndex + 1}`}
                className="image-slide-out"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="image-wrapper"
              style={{ flex: "1 0 20%", height: "100%" }}
            >
              <img
                src={images[this.state.currentImageIndex]}
                alt={`${this.state.currentImageIndex + 1}`}
                className="image-slide-in"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="image-wrapper"
              style={{ flex: "1 0 20%", height: "100%" }}
            >
              <img
                src={images[nextImageIndex]}
                alt={`${nextImageIndex + 1}`}
                className="image-slide-in"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>

        <Navbar
          bg="dark"
          data-bs-theme="dark"
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 9999,
            height: "80px",
            transition: "background-color 500ms ease-in-out",
            backgroundColor: this.state.isScrolled
              ? "rgba(0, 0, 0, 1)"
              : "rgba(0, 0, 0, .1)",
            padding: "1rem 2rem",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container>
            <Nav className="me-auto">
              <Button type="link" href="#home" style={{ color: "white" }}>
                Home
              </Button>
              <Button type="link" href="#features" style={{ color: "white" }}>
                Features
              </Button>
              <Button type="link" href="#pricing" style={{ color: "white" }}>
                Pricing
              </Button>
              <Button type="link" href="#about" style={{ color: "white" }}>
                About
              </Button>
              <Button type="link" href="#resume" style={{ color: "white" }}>
                Resume
              </Button>
              <Button type="link" href="#contact" style={{ color: "white" }}>
                Contact
              </Button>
              <Button type="link" href={project} style={{ color: "white" }}>
                Project
              </Button>
              <Button type="link" href={github} style={{ color: "white" }}>
                GitHub
              </Button>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
