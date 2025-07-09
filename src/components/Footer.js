import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#2E3196", color: "#fff" }}>
      <Container className="py-5">
        <Row>
          {/* Column 1: Logo, description, social icons */}
          <Col md={5} className="mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <img
                src="/logo.png"
                alt="Logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
            </div>
            <p style={{ fontSize: "14px", lineHeight: "24px", color: "#fff" }}>
              Solid Horizon Sdn Bhd has been the Integrated Market Leader in
              Modular Construction of Portable Cabin, Labour Quarter Cabin,
              Toilet Cabin, Guard House, Used Container, Polyurethane Cabin
              since 1994.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>

          {/* Column 2: Contact Us */}
          <Col md={5} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p className="mb-2" style={{ color: "#fff" }}>
              <FaMapMarkerAlt className="me-2" />
              Lot 4912, Jalan Teratai, 5 1/2 Miles Off Jalan Meru, 41050 Klang,
              Selangor
            </p>
            <p className="mb-2" style={{ color: "#fff" }}>
              <FaEnvelope className="me-2" />
              solid@solidhorizon.com
            </p>
            <p className="mb-2" style={{ color: "#fff" }}>
              <FaPhoneAlt className="me-2" />
              +6 03 3396 3888
            </p>
          </Col>

          {/* Column 3: Quick Links */}
          <Col md={2}>
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                "About",
                "Products",
                "Services",
                "Projects",
                "News",
                "Career",
              ].map((link, idx) => (
                <li key={idx} className="mb-2">
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <hr style={{ borderTop: "1px solid #ccc", marginTop: "40px" }} />

        <div className="text-center pt-3 pb-1" style={{ fontSize: "14px" }}>
          Copyright © 2024 Solid Horizon Sdn. Bhd.
        </div>
      </Container>

      {/* Custom styling for social icons */}
      <style>{`
        .social-icon {
          width: 35px;
          height: 35px;
          border: 1px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          color: white;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background-color: white;
          color: #2E3196;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
