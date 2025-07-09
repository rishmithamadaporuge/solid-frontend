import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUsers, FaProjectDiagram, FaClock } from "react-icons/fa";

const CompanyStats = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const items = [
    { value: "1000+", label: "Happy Customers", icon: <FaUsers /> },
    { value: "500+", label: "Projects Done", icon: <FaProjectDiagram /> },
    { value: "30+", label: "Years of Experience", icon: <FaClock /> },
  ];

  return (
    <section id="company-stats" className="company-stats-section">
      <Container className="stats-container">
        <Row className="justify-content-center bg-stats shadow rounded-0 py-4 px-3 align-items-center">
          {items.map((item, idx) => (
            <Col
              key={idx}
              md={4}
              sm={12}
              className={`stat-item ${animate ? "animate" : ""}`}
              style={{
                animationDelay: `${idx * 0.3}s`,
              }}
            >
              <div className="stat-icon">{item.icon}</div>
              <div>
                <h2 className="fw-bold mb-1 stat-value">{item.value}</h2>
                <p className="stat-label">{item.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .company-stats-section {
          position: relative;
          z-index: 10;
          margin-top: -60px;
        }

        .stats-container {
          width: 50%;
          margin: 0;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #fff;
          opacity: 0;
          transform: translateY(30px);
          animation-name: fadeSlideUp;
          animation-fill-mode: forwards;
          animation-duration: 0.6s;
          animation-timing-function: ease-out;
          margin-bottom: 20px;
        }

        .stat-icon {
          font-size: 40px;
          flex-shrink: 0;
        }

        .stat-value {
          font-size: 32px;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 600;
          margin: 0;
          color: #fff;
        }

        @keyframes fadeSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Extra small devices (phones, 600px and down) */
        @media (max-width: 600px) {
          .company-stats-section {
            margin-top: 50px;
          }

          .stats-container {
            width: 100%;
            padding: 0 15px;
          }

          .stat-item {
            flex-direction: row;
            text-align: left;
          }
        }

        /* Small devices (600px and up) */
        @media (min-width: 600px) and (max-width: 767.98px) {
          .company-stats-section {
            margin-top: 50px;
          }

          .stats-container {
            width: 100%;
            padding: 0 20px;
          }
        }

        /* Medium devices (768px and up) */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .company-stats-section {
            margin-top: 50px;
          }

          .stats-container {
            width: 100%;
            padding: 0 30px;
          }
        }

        /* Large devices (992px and up) */
        @media (min-width: 992px) {
          .company-stats-section {
            margin-top: -60px;
          }

          .stats-container {
            width: 50%;
            padding-left: 0;
            padding-right: 0;
            margin-left: 0;
            margin-right: auto;
          }

          .stat-item {
            justify-content: flex-start;
            margin-bottom: 0;
          }
        }

        /* Extra large devices (1200px and up) */
        @media (min-width: 1200px) {
          .company-stats-section {
            margin-top: -60px;
          }

          .stats-container {
            width: 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default CompanyStats;
