import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const features = [
  {
    title: "30 Years of industry knowledge and practice",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Innovative construction technology solutions",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Industry Certified",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Proven industry track record",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const WhyUs = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      className="bg-white section-padding whyus-section"
      ref={sectionRef}
    >
      <Container>
        <div className="text-block mb-4">
          <div className="subheading">Lorem ipsum dolor sit</div>
          <h1 className="headline">Why Choose Us</h1>
        </div>
        <Row className="align-items-center">
          <Col
            xs={12}
            lg={5}
            className={`text-center mb-4 mb-lg-0 image-container ${
              visible ? "animate-fade-slide-left" : ""
            }`}
          >
            <img
              src="/whyus-img.png"
              alt="Why Us"
              className="img-fluid rounded"
            />
          </Col>

          <Col xs={12} lg={7}>
            <Row>
              {features.map((f, idx) => (
                <Col
                  key={idx}
                  xs={12}
                  md={6}
                  className={`mb-4 card-container ${
                    visible ? "animate-fade-slide-up" : ""
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <Card className="h-100 p-3 border-1 rounded-0 feature-card">
                    <Card.Body>
                      <Card.Title
                        className="fw-bold text-center"
                        style={{ color: "#2e3196" }}
                      >
                        {f.title}
                      </Card.Title>
                      <Card.Text className="text-center text-muted">
                        {f.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .whyus-section {
          padding: 100px 0;
        }

        .text-block {
          margin-bottom: 30px;
        }

        .feature-card {
          border-color: #2e3196;
        }

        .image-container,
        .card-container {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .image-container.animate-fade-slide-left {
          opacity: 1;
          transform: translateX(0);
          animation: fadeSlideLeft 0.7s ease forwards;
        }

        .card-container.animate-fade-slide-up {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes fadeSlideLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* XS: ≤600px */
        @media (max-width: 600px) {
          .whyus-section {
            padding: 80px 20px 50px;
            text-align: center;
          }
          .headline {
            font-size: 24px;
          }
          .subheading {
            font-size: 13px;
          }
        }

        /* SM: 600px-767px */
        @media (min-width: 600px) and (max-width: 767.98px) {
          .headline {
            font-size: 28px;
          }
          .card-container {
            padding-left: 5px;
            padding-right: 5px;
          }
        }

        /* MD: 768px-991px */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .headline {
            font-size: 32px;
          }
        }

        /* LG: 992px-1199px */
        @media (min-width: 992px) {
          .whyus-section {
            padding: 120px 60px 70px;
            text-align: left;
          }
        }

        /* XL: ≥1200px */
        @media (min-width: 1200px) {
          .whyus-section {
            padding: 140px 100px 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyUs;
