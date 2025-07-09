import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import InquiryForm from "./InquiryForm";

const Contacts = () => {
  const [showForm, setShowForm] = useState(false);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleOpen = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

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
      id="contacts"
      className="bg-contact section-padding"
      ref={sectionRef}
      style={{ marginBottom: "0px", paddingBottom: "0px" }}
    >
      <Container fluid>
        <Row className="align-items-center justify-content-center g-4">
          <Col
            xs={12}
            md={5}
            className={`contact-image text-center ${
              visible ? "animate-fade-slide-in-left" : ""
            }`}
          >
            <img
              src="/contact-img.png"
              alt="Contact Us"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>

          <Col
            xs={12}
            md={7}
            className={`text-center text-md-start contact-content ${
              visible ? "animate-fade-slide-in-right" : ""
            }`}
          >
            <h1 className="headline mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <Button className="btn-custom contact-btn" onClick={handleOpen}>
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>

      <Modal show={showForm} onHide={handleClose} centered>
        <InquiryForm onClose={handleClose} />
      </Modal>

      <style jsx>{`
        .btn-custom.contact-btn {
          background: #fd5d14;
          border: none;
          padding: 12px 30px;
          border-radius: 0;
          font-weight: 500;
        }

        .contact-image,
        .contact-content {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .contact-image.animate-fade-slide-in-left,
        .contact-content.animate-fade-slide-in-right {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 600px) {
          .section-padding {
            padding: 60px 20px 40px;
          }
          .headline {
            font-size: 1.6rem;
            text-align: center;
          }
          .contact-btn {
            width: 100%;
            margin-top: 20px;
            margin-bottom: 40px;
          }
        }

        @media (min-width: 601px) and (max-width: 767px) {
          .section-padding {
            padding: 80px 30px 50px;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .section-padding {
            padding: 90px 50px 60px;
          }
        }

        @media (min-width: 992px) {
          .section-padding {
            padding: 100px 80px;
          }
          .headline {
            font-size: 2.5rem;
          }
        }

        @media (min-width: 1200px) {
          .headline {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contacts;
