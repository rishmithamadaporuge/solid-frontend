import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const products = [
  { img: "/product-img1.png", text: "Solid Cabin" },
  { img: "/product-img2.png", text: "Solid Project" },
  { img: "/product-img3.png", text: "Steel Concrete Hybrid Building" },
  { img: "/product-img4.png", text: "Rumah Comel Modular House" },
];

const Products = () => {
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
      id="products"
      className="bg-products section-padding"
      ref={sectionRef}
    >
      <Container>
        <div className="text-block mb-4">
          <div className="subheading">Lorem ipsum dolor sit amet</div>
          <h1 className="headline">Our Products</h1>
        </div>

        <Row className="product-row">
          {products.map((product, idx) => (
            <Col
              key={idx}
              xs={12}
              sm={12}
              md={6}
              lg={3}
              className={`mb-4 product-card ${
                visible ? "animate-fade-slide-up" : ""
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <Card className="h-100 border-0">
                <Card.Img
                  variant="top"
                  src={product.img}
                  style={{ objectFit: "contain", height: "400px" }}
                />
                <Card.Body className="d-flex align-items-center justify-content-center">
                  <Card.Text className="product-title mb-0">
                    {product.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .section-padding {
          padding: 100px 0;
        }

        .product-title {
          color: #2e3196;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 700;
          text-align: center;
        }

        .product-card {
          border: none;
          padding: 0px;
          shadow: none;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-fade-slide-up {
          opacity: 1;
          transform: translateY(0);
        }

        /* XS - Phones */
        @media (max-width: 600px) {
          .section-padding {
            padding: 80px 20px 60px;
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
          .section-padding {
            padding: 120px 60px 80px;
          }
        }

        /* XL - Large Desktops */
        @media (min-width: 1200px) {
          .section-padding {
            padding: 140px 100px 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default Products;
