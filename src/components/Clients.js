import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const clientLogos = [
  "/clients-logo1.png",
  "/clients-logo2.png",
  "/clients-logo3.png",
  "/clients-logo4.png",
  "/clients-logo5.png",
  "/clients-logo6.png",
  "/clients-logo7.png",
];

const Clients = () => {
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
      id="clients"
      className="bg-clients section-padding text-center clients-section"
      ref={sectionRef}
    >
      <Container>
        <div className="text-block mb-4">
          <div className="subheading">Lorem ipsum dolor sit amet</div>
          <h1 className="headline">Our Trusted Clients</h1>
        </div>

        <Row className="justify-content-center align-items-center client-row">
          {clientLogos.map((logo, idx) => (
            <Col
              key={idx}
              xs={6}
              sm={6}
              md={4}
              lg={2}
              xl={1}
              className={`mb-4 client-logo ${
                visible ? "animate-fade-scale" : ""
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <Image
                src={logo}
                alt={`Client ${idx + 1}`}
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .clients-section {
          padding: 100px 0 80px;
        }

        .client-logo {
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-fade-scale {
          opacity: 1;
          transform: scale(1);
        }

        /* XS - Phones */
        @media (max-width: 600px) {
          .clients-section {
            padding: 80px 20px 50px;
          }
          .headline {
            font-size: 24px;
          }
          .subheading {
            font-size: 13px;
          }
        }

        /* SM - Tablets Portrait */
        @media (min-width: 600px) and (max-width: 767.98px) {
          .headline {
            font-size: 28px;
          }
        }

        /* MD - Tablets Landscape */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .headline {
            font-size: 32px;
          }
        }

        /* LG - Desktops */
        @media (min-width: 992px) {
          .clients-section {
            padding: 120px 60px 80px;
          }
        }

        /* XL - Large Desktops */
        @media (min-width: 1200px) {
          .clients-section {
            padding: 140px 100px 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;
