import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";

const servicesTexts = {
  subheading: "Lorem ipsum dolor",
  heading: "Our Services",
  paragraph:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
};

const serviceImages = [
  { src: "/slider1.png", overlay: "Contactor / Sub-Contractor" },
  { src: "/slider2.png", overlay: "Design & Build" },
  { src: "/slider3.png", overlay: "EPCC Contractor" },
  { src: "/slider1.png", overlay: "Contactor / Sub-Contractor" },
  { src: "/slider2.png", overlay: "Design & Build" },
  { src: "/slider3.png", overlay: "EPCC Contractor" },
];

const Services = () => {
  const [visible, setVisible] = useState(false);
  const [imagesPerSlide, setImagesPerSlide] = useState(3);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateImagesPerSlide = () => {
      const width = window.innerWidth;
      if (width < 768) setImagesPerSlide(1);
      else if (width < 992) setImagesPerSlide(2);
      else setImagesPerSlide(3);
    };
    updateImagesPerSlide();
    window.addEventListener("resize", updateImagesPerSlide);
    return () => window.removeEventListener("resize", updateImagesPerSlide);
  }, []);

  const groupedImages = Array.from({
    length: Math.ceil(serviceImages.length / imagesPerSlide),
  }).map((_, idx) =>
    serviceImages.slice(idx * imagesPerSlide, (idx + 1) * imagesPerSlide)
  );

  return (
    <section
      id="services"
      className="bg-services section-padding text-white services-section"
      ref={sectionRef}
      style={{ overflow: "hidden" }}
    >
      <Container>
        <Row className="align-items-center">
          <Col
            xs={12}
            md={5}
            className={`mb-4 mb-md-0 services-text ${
              visible ? "animate-fade-slide-left" : ""
            }`}
          >
            <div className="subheading">{servicesTexts.subheading}</div>
            <h1 className="headline">{servicesTexts.heading}</h1>
            <p className="paragraph">{servicesTexts.paragraph}</p>
            <Button className="btn-custom">Learn More</Button>
          </Col>

          <Col
            xs={12}
            md={7}
            className={`services-carousel ${
              visible ? "animate-fade-slide-right" : ""
            }`}
          >
            <Carousel variant="dark" indicators={false} controls={true}>
              {groupedImages.map((group, idx) => (
                <Carousel.Item key={idx}>
                  <Row className="g-2">
                    {group.map((img, i) => (
                      <Col
                        key={i}
                        xs={12}
                        sm={12}
                        md={imagesPerSlide === 2 ? 6 : 4}
                        className="position-relative"
                      >
                        <img
                          className="d-block w-100 rounded"
                          src={img.src}
                          alt={`Slide ${idx * imagesPerSlide + i + 1}`}
                          style={{
                            maxHeight: "400px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="overlay-text">{img.overlay}</div>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>

      {/* Styles */}
      <style jsx>{`
        .services-section {
          padding: 100px 0 60px;
        }

        .btn-custom {
          background: #2e3196;
          padding: 12px 30px;
          border-radius: 0;
          font-weight: 600;
          color: #fff;
          border: none;
        }

        .btn-custom:hover {
          background: #1f237d;
        }

        .services-text,
        .services-carousel {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease-out;
        }

        .services-text.animate-fade-slide-left {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.2s;
        }

        .services-carousel.animate-fade-slide-right {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.4s;
        }

        .overlay-text {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(0, 0, 0, 0.9) 100%
          );
          color: #fff;
          padding: 8px 16px;
          font-size: 14px;
          width: 80%;
          border-radius: 4px;
          text-align: center;
        }

        /* Extra small devices (phones, ≤600px) */
        @media (max-width: 600px) {
          .services-section {
            padding: 80px 20px 40px;
            text-align: center;
          }
          .headline {
            font-size: 24px;
          }
          .paragraph {
            font-size: 15px;
          }
          .subheading {
            font-size: 13px;
          }
          .btn-custom {
            width: 100%;
          }
        }

        /* Small devices (600px–767px) */
        @media (min-width: 600px) and (max-width: 767.98px) {
          .headline {
            font-size: 26px;
          }
          .paragraph {
            font-size: 16px;
          }
          .btn-custom {
            width: 100%;
          }
        }

        /* Medium devices (768px–991px) */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .headline {
            font-size: 30px;
          }
          .paragraph {
            font-size: 17px;
          }
        }

        /* Large devices (992px–1199px) */
        @media (min-width: 992px) {
          .services-section {
            padding: 120px 60px 70px;
            text-align: left;
          }
          .headline {
            font-size: 34px;
          }
          .paragraph {
            font-size: 17px;
          }
        }

        /* Extra large devices (1200px+) */
        @media (min-width: 1200px) {
          .services-section {
            padding: 140px 100px 80px;
          }
          .headline {
            font-size: 38px;
          }
          .paragraph {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
