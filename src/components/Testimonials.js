import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    profile: "/testimonial-avatar-1.png.png",
    name: "Savannah Nguyen",
    company: "Purchaser at Mediarex Sdn Bhd",
    rating: 5,
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour or randomised words which don't look even slightly believable.",
  },
  {
    profile: "/testimonial-avatar-2.png.png",
    name: "Ahmad Faizal",
    company: "Purchaser at Mediarex Sdn Bhd",
    rating: 5,
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour or randomised words which don't look even slightly believable.",
  },
  {
    profile: "/testimonial-avatar-1.png.png",
    name: "Savannah Nguyen2",
    company: "Purchaser at Mediarex Sdn Bhd",
    rating: 5,
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour or randomised words which don't look even slightly believable.",
  },
  {
    profile: "/testimonial-avatar-2.png.png",
    name: "Ahmad Faizal2",
    company: "Purchaser at Mediarex Sdn Bhd",
    rating: 5,
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour or randomised words which don't look even slightly believable.",
  },
];

// Helper to chunk into slides of 1 or 2
const chunkArray = (arr, size) =>
  arr.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    []
  );

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [chunkSize, setChunkSize] = useState(2);

  useEffect(() => {
    const updateChunkSize = () => {
      if (window.innerWidth < 992) {
        setChunkSize(1);
      } else {
        setChunkSize(2);
      }
    };

    updateChunkSize();
    window.addEventListener("resize", updateChunkSize);
    return () => window.removeEventListener("resize", updateChunkSize);
  }, []);

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

  const testimonialChunks = chunkArray(testimonials, chunkSize);

  return (
    <section
      id="testimonials"
      className="bg-testimonials section-padding text-white"
      ref={sectionRef}
    >
      <Container>
        <div className="subheading text-center">Lorem ipsum dolor sit amet</div>
        <h1 className="headline text-center mb-5">
          Appreciated By Our Customers
        </h1>
        <Carousel indicators={true} interval={8000}>
          {testimonialChunks.map((chunk, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {chunk.map((t, i) => (
                  <Col
                    key={i}
                    md={chunkSize === 2 ? 6 : 12}
                    className={`testimonial-card ${
                      visible ? "animate-fade-slide-up" : ""
                    }`}
                    style={{ transitionDelay: `${(idx * 2 + i) * 200}ms` }}
                  >
                    <Card
                      bg="white"
                      className="text-center p-4 shadow-sm border-0 mb-4 h-100"
                    >
                      <img
                        src={t.profile}
                        alt={t.name}
                        className="rounded-circle mx-auto mb-3"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <Card.Title style={{ color: "#2e3196" }}>
                        {t.name}
                      </Card.Title>
                      <Card.Text className="text-muted small">
                        {t.company}
                      </Card.Text>
                      <Card.Text>
                        {[...Array(t.rating)].map((_, i) => (
                          <FaStar key={i} color="#FD5D14" />
                        ))}
                      </Card.Text>
                      <Card.Text className="fst-italic text-dark">
                        "{t.comment}"
                      </Card.Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <style jsx>{`
        .testimonial-card {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-fade-slide-up {
          opacity: 1;
          transform: translateY(0);
        }

        .section-padding {
          padding: 100px 0;
        }

        @media (max-width: 600px) {
          .section-padding {
            padding: 80px 20px;
          }
          .headline {
            font-size: 24px;
          }
        }

        @media (min-width: 600px) and (max-width: 767.98px) {
          .headline {
            font-size: 26px;
          }
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
          .headline {
            font-size: 30px;
          }
        }

        @media (min-width: 992px) {
          .headline {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
