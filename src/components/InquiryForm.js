import React, { useState } from "react";

const InquiryForm = () => {
  const [form, setForm] = useState({
    type: "hi",
    name: "",
    email: "",
    message: "",
    service: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false); // modal state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim()) newErrors.email = true;
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setShowModal(true); // show popup
      setForm({
        type: "hi",
        name: "",
        email: "",
        message: "",
        service: "",
        budget: "",
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.heading}>CONTACT US</h2>

          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="type"
                value="hi"
                checked={form.type === "hi"}
                onChange={handleChange}
                style={styles.radioInput}
              />
              Say Hi
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="type"
                value="quote"
                checked={form.type === "quote"}
                onChange={handleChange}
                style={styles.radioInput}
              />
              Get a Quote
            </label>
          </div>

          <div style={styles.inputWrapper}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.name && <span style={styles.error}>!</span>}
          </div>

          <div style={styles.inputWrapper}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <span style={styles.error}>!</span>}
          </div>

          {form.type === "quote" && (
            <>
              <div style={styles.inputWrapper}>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="">Needed Services</option>
                  <option value="web">Web Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="seo">SEO Optimization</option>
                </select>
              </div>

              <div style={styles.inputWrapper}>
                <input
                  type="number"
                  name="budget"
                  placeholder="Your Budget ($)"
                  value={form.budget}
                  onChange={handleChange}
                  style={styles.select}
                />
              </div>
            </>
          )}

          <div style={{ ...styles.inputWrapper, alignItems: "flex-start" }}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              style={{ ...styles.input, resize: "vertical" }}
            />
          </div>

          <button type="submit" style={styles.button}>
            SUBMIT
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <p style={styles.modalText}>Inquiry Submitted!</p>
            <button style={styles.modalButton} onClick={closeModal}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    background: "#2e3196",
    padding: "40px",
    borderRadius: "0px",
    width: "100%",
    margin: "0 auto",
    boxShadow: "0 0 12px rgba(0,0,0,0.15)",
    fontFamily: "'Poppins', sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontFamily: "Open Sans, sans-serif",
    textAlign: "center",
    color: "#fff",
    fontWeight: "800",
    marginBottom: "25px",
  },
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    gap: "20px",
  },
  radioLabel: {
    fontFamily: "Open Sans, sans-serif",
    color: "#fff",
    fontWeight: "500",
    fontSize: "16px",
  },
  radioInput: {
    marginRight: "8px",
  },
  inputWrapper: {
    position: "relative",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    fontFamily: "Open Sans, sans-serif",
    padding: "10px 12px",
    border: "none",
    borderBottom: "1px solid #ccc",
    background: "transparent",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
  },
  select: {
    padding: "10px 12px",
    border: "none",
    borderBottom: "1px solid #ccc",
    background: "transparent",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
    appearance: "none",
  },
  error: {
    position: "absolute",
    right: "10px",
    top: "12px",
    color: "red",
    fontWeight: "bold",
    fontSize: "16px",
  },
  button: {
    padding: "12px 0",
    backgroundColor: "#fff",
    color: "#2e3196",
    border: "none",
    borderRadius: "0px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  // Modal Styles
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "0px",
    textAlign: "center",
    minWidth: "300px",
  },
  modalText: {
    marginBottom: "20px",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "18px",
    fontWeight: "bold",
  },
  modalButton: {
    padding: "10px 40px",
    backgroundColor: "#2e3196",
    color: "#fff",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default InquiryForm;
