import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only animate once
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="about-section bg-about section-padding"
      ref={sectionRef}
    >
      <Container>
        <Row className="align-items-center">
          {/* Image */}
          <Col
            md={6}
            className={`text-center about-img ${
              visible ? "animate-fade-slide-left" : ""
            }`}
          >
            <img src="about-img.png" alt="About Us" className="img-fluid" />
          </Col>

          {/* Text Content */}
          <Col
            md={6}
            className={`about-text ${
              visible ? "animate-fade-slide-right" : ""
            }`}
          >
            <div className="subheading">Lorem ipsum dolor sit amet</div>
            <h1 className="headline">
              Leading the Future of Portable Solutions
            </h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <Button className="btn-custom">Learn More</Button>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .btn-custom {
          background: #2e3196;
          color: #fff;
          border: none;
          padding: 12px 30px;
          border-radius: 0;
          font-weight: 600;
          margin-top: 10px;
        }

        .btn-custom:hover {
          background: #1f237d;
        }

        .about-img {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease-out;
        }

        .animate-fade-slide-left {
          opacity: 1;
          transform: translateX(0);
        }

        .about-text {
          opacity: 0;
          transform: translateX(30px);
          animation: fadeSlideRight 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }

        .animate-fade-slide-right {
          opacity: 1;
          transform: translateX(0);
        }

        @keyframes fadeSlideRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Extra small devices (phones, 600px and down) */
        @media (max-width: 600px) {
          .about-section {
            padding: 70px 15px 40px;
            text-align: center;
          }

          .about-img {
            margin-bottom: 20px;
          }

          .subheading {
            font-size: 14px;
            margin-bottom: 10px;
          }

          .headline {
            font-size: 24px;
            margin-bottom: 12px;
          }

          .paragraph {
            font-size: 15px;
            margin-bottom: 20px;
          }

          .btn-custom {
            width: 100%;
          }
        }

        /* Small devices (600px and up) */
        @media (min-width: 600px) and (max-width: 767.98px) {
          .about-section {
            padding: 80px 20px 40px;
            text-align: center;
          }

          .headline {
            font-size: 28px;
          }

          .paragraph {
            font-size: 16px;
          }
        }

        /* Medium devices (768px and up) */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .about-section {
            padding: 90px 30px 50px;
            text-align: center;
          }

          .headline {
            font-size: 32px;
          }

          .paragraph {
            font-size: 16px;
          }
        }

        /* Large devices (992px and up) */
        @media (min-width: 992px) {
          .about-section {
            padding: 100px 60px;
            text-align: left;
          }

          .headline {
            font-size: 36px;
          }

          .paragraph {
            font-size: 16px;
          }

          .about-text {
            padding-left: 30px;
          }
        }

        /* Extra large devices (1200px and up) */
        @media (min-width: 1200px) {
          .about-section {
            padding: 120px 80px;
          }

          .headline {
            font-size: 40px;
          }

          .paragraph {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
