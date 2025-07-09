import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const menuLinks = [
  "About",
  "Products",
  "Services",
  "Sustainability",
  "Projects",
  "News",
  "Career",
  "Contact Us",
];

const CustomNavbar = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Navbar
      bg="light"
      fixed="top"
      expand="lg"
      className="py-0 shadow-sm custom-navbar"
    >
      <Container fluid className="d-flex align-items-center px-0 px-md-4">
        {/* Logo */}
        <Navbar.Brand
          href="#"
          className={`m-0 p-0 navbar-logo ${
            animate ? "animate-fade-slide-left" : ""
          }`}
        >
          <div className="logo-container">
            <img src="/logo.png" alt="Logo" className="logo-img" />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto" />

        <Navbar.Collapse
          id="navbar-nav"
          className={`justify-content-center nav-menu ${
            animate ? "animate-fade-slide-up" : ""
          }`}
        >
          <Nav className="align-items-center gap-2 gap-md-3 py-2 py-md-0">
            {menuLinks.map((link, idx) => (
              <Nav.Link
                key={idx}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-uppercase"
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  transitionDelay: `${idx * 100}ms`,
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                {link}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>

        {/* Social Icons */}
        <div
          className={`social-icons d-none d-sm-flex gap-3 align-items-center ${
            animate ? "animate-fade-slide-right" : ""
          }`}
        >
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF size={20} color="#2E3196" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={20} color="#2E3196" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn size={20} color="#2E3196" />
          </a>
        </div>
      </Container>

      {/* Animation & Responsive Styles */}
      <style jsx>{`
        .logo-container {
          background-color: #2e3196;
          padding: 16px 40px;
          display: inline-block;
        }

        .logo-img {
          height: 32px;
          margin-bottom: 0px;
        }

        .navbar-logo {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .animate-fade-slide-left {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.3s;
        }

        .nav-menu {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .animate-fade-slide-up {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.5s;
        }

        .social-icons {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .animate-fade-slide-right {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.7s;
        }

        @media (max-width: 600px) {
          .logo-container {
            padding: 12px 24px;
            align-items: center;
          }
          .logo-img {
            height: 28px;
          }
        }

        @media (max-width: 767.98px) {
          .navbar-logo {
            margin-right: auto;
            margin-bottom: 0px;
          }

          .social-icons {
            display: none !important;
          }

          .navbar-collapse {
            background: #fff;
            padding: 10px 0;
          }

          .nav-menu {
            text-align: center;
          }

          .nav-menu .nav-link {
            display: block;
            padding: 12px 0;
          }
          img {
            margin-bottom: 0px;
          }
        }

        @media (min-width: 768px) {
          .social-icons {
            margin-left: auto;
          }
          img {
            margin-bottom: 0px;
          }
        }

        @media (min-width: 992px) {
          .navbar-brand {
            margin-right: 24px;
          }

          .nav-menu {
            margin-right: auto;
          }
        }

        @media (min-width: 1200px) {
          .logo-img {
            height: 35px;
            margin-bottom: 0px;
          }

          .logo-container {
            align-items: center;
            padding: 20px 60px;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default CustomNavbar;
