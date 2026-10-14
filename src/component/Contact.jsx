import React, { useState } from "react";
import "./Contact.css/";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
      subject || "Furniture House Enquiry"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className=" container-fluid contacts">
      <div className="text-center mb-5">
        <p className="text-success fw-semibold mb-2">GET IN TOUCH</p>
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-dark">
          Have questions about our furniture? We would love to hear from you.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-lg-5">
          <div className=" p-4 p-md-5 h-100 bg-transparent">
            <h4 className="fw-bold mb-4">Let's Talk Furniture</h4>

            <div className="d-flex gap-3 mb-4">
              <i className="bi bi-geo-alt-fill text-success fs-3"></i>
              <div>
                <h6 className="fw-bold">Our Location</h6>
                <p className="text-dark mb-0">
                  Visit us for your furniture needs.
                </p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-4">
              <i className="bi bi-envelope-fill text-success fs-3"></i>
              <div>
                <h6 className="fw-bold">Email Us</h6>
                <p className="text-dark mb-0">
                  your-furniturehouse.com
                </p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-4">
              <i className="bi bi-clock-fill text-success fs-3"></i>
              <div>
                <h6 className="fw-bold">Working Hours</h6>
                <p className="text-dark mb-0">
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            <img
              src="/Images/Illustration/hero productcatalog.png"
              alt="Furniture collection"
              className="img-fluid rounded mt-2"
            />
          </div>
        </div>

        <div className="col-lg-7">
          <div className=" p-4 p-md-5 h-100 bg-transparent">
            <h4 className="fw-bold mb-4">Send Us a Message</h4>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control bg-transparent"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control bg-transparent"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control bg-transparent"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control bg-transparent"
                    rows="5"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-success px-4 py-2">
                    Send Message
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </form>

            <p className="text-secondary small mt-3 mb-0">
              Submitting opens your default email application with your
              message prepared. It does not send automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;