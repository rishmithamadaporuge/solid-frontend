import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const InquiryForm = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry Submitted!");
    setForm({ name: "", email: "", message: "" });

    if (onClose) onClose(); // Close modal if provided
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button
        type="submit"
        className="btn-custom"
        style={{
          background: "#2e3196",
          paddingTop: 12,
          paddingRight: 30,
          paddingBottom: 12,
          paddingLeft: 30,
          borderRadius: 0,
          marginTop: 10,
          hover: {
            backgroundColor: "#1f237d",
            color: "#fff",
          },
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default InquiryForm;
