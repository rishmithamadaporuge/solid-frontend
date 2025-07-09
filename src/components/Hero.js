import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      id="hero"
      className="bg-hero hero-section"
      style={{ color: "#fff", overflow: "hidden" }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Text Content */}
          <Col
            lg={6}
            className="text-center text-lg-start mb-4 mb-lg-0"
            style={{ zIndex: 2 }}
          >
            <div
              className={`subheading ${animate ? "fade-slide-up delay-0" : ""}`}
            >
              Innovative, Reliable, and Sustainable
            </div>
            <h1
              className={`headline ${animate ? "fade-slide-up delay-1" : ""}`}
            >
              Innovative Cabins for Modern Needs
            </h1>
            <p
              className={`paragraph ${animate ? "fade-slide-up delay-2" : ""}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button
              className={`btn-custom ${animate ? "fade-slide-up delay-3" : ""}`}
            >
              Explore Our Products
            </Button>
          </Col>

          {/* Hero Image */}
          <Col lg={6} className="text-center">
            <img
              src="hero-img.png"
              alt="Hero Visual"
              className={`img-fluid hero-img ${animate ? "fade-scale-in" : ""}`}
            />
          </Col>
        </Row>
      </Container>

      {/* Animations + Responsive CSS */}
      <style jsx>{`
        .hero-section {
          padding: 100px 0 40px;
        }

        .btn-custom {
          background: #2e3196;
          padding: 12px 30px;
          border-radius: 0;
          margin-top: 10px;
          font-weight: 600;
          color: #fff;
          border: none;
        }

        .btn-custom:hover {
          background-color: #1f237d;
        }

        .fade-slide-up {
          opacity: 0;
          transform: translateY(30px);
          animation-fill-mode: forwards;
          animation-name: fadeSlideUp;
          animation-duration: 0.6s;
          animation-timing-function: ease-out;
        }

        .fade-scale-in {
          opacity: 0;
          transform: scale(0.95);
          animation-fill-mode: forwards;
          animation-name: fadeScaleIn;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
          animation-delay: 1.2s;
        }

        @keyframes fadeSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeScaleIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .delay-0 {
          animation-delay: 0s;
        }

        .delay-1 {
          animation-delay: 0.3s;
        }

        .delay-2 {
          animation-delay: 0.6s;
        }

        .delay-3 {
          animation-delay: 0.9s;
        }

        /* Extra small devices (phones, 600px and down) */
        @media (max-width: 600px) {
          .hero-section {
            padding: 90px 15px 30px;
            text-align: center;
          }

          .subheading {
            font-size: 14px;
            margin-bottom: 8px;
          }

          .headline {
            font-size: 26px;
            line-height: 1.3;
            margin-bottom: 12px;
          }

          .paragraph {
            font-size: 15px;
            margin-bottom: 16px;
          }

          .btn-custom {
            width: 100%;
          }

          .hero-img {
            margin-top: 20px;
            margin-bottom: -30px;
          }
        }

        /* Small devices (600px and up) */
        @media (min-width: 600px) and (max-width: 767.98px) {
          .hero-section {
            padding: 100px 20px 40px;
            text-align: center;
          }

          .headline {
            font-size: 30px;
          }

          .hero-img {
            margin-top: 20px;
          }
        }

        /* Medium devices (768px and up) */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .hero-section {
            padding: 120px 40px 60px;
            text-align: center;
          }

          .headline {
            font-size: 36px;
          }

          .hero-img {
            margin-top: 10px;
          }
        }

        /* Large devices (992px and up) */
        @media (min-width: 992px) {
          .hero-section {
            padding: 140px 60px 80px;
            text-align: left;
          }

          .headline {
            font-size: 40px;
          }

          .paragraph {
            font-size: 16px;
          }

          .hero-img {
            margin-bottom: -60px;
          }
        }

        /* Extra large devices (1200px and up) */
        @media (min-width: 1200px) {
          .hero-section {
            padding: 160px 100px 100px;
          }

          .headline {
            font-size: 46px;
          }

          .paragraph {
            font-size: 18px;
          }

          .hero-img {
            margin-bottom: -80px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
