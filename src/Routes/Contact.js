import React, { useState } from "react";
import "../App.css";
import "./Contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MY_EMAIL = "gluaysmedley@gmail.com";

// FormSubmit emails the message straight to MY_EMAIL (no account needed).
// The first submission sends an "Activate form" email that must be clicked once.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${MY_EMAIL}`;

const initialForm = { firstName: "", lastName: "", email: "", message: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Returns an error message for each invalid field
const validate = (form) => {
  const errors = {};
  if (!form.firstName.trim()) errors.firstName = "Please enter your first name.";
  if (!form.lastName.trim()) errors.lastName = "Please enter your last name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = "Please enter a valid email, like name@example.com.";
  }
  if (!form.message.trim()) errors.message = "Please enter a message.";
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [triedSubmit, setTriedSubmit] = useState(false);

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    // after a failed submit, update errors as the visitor fixes them
    if (triedSubmit) setErrors(validate(updated));
    if (status !== "sending") setStatus("idle");
  };

  // shared props for each field, including error state for screen readers
  const fieldProps = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange: handleChange,
    className: errors[name] ? "invalid" : "",
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const fieldError = (name) =>
    errors[name] && (
      <p className="field-error" id={`${name}-error`}>
        {errors[name]}
      </p>
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setTriedSubmit(true);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid).focus();
      return;
    }

    setStatus("sending");
    const name = `${form.firstName.trim()} ${form.lastName.trim()}`;
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // The time keeps Gmail from grouping messages into one thread
          _subject: `Portfolio message from ${name} (${new Date().toLocaleString()})`,
          _template: "table",
          _captcha: "false",
          name,
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok || String(data.success) !== "true") {
        throw new Error(data.message || `Request failed: ${res.status}`);
      }
      setForm(initialForm);
      setTriedSubmit(false);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div>
      <Header />
      <div className="container-all contact-page">
        <h2>Contact</h2>
        <p className="contact-intro">
          Whether it’s a role, a project or just a hello, I’d love to hear
          from you.
        </p>

        <section className="contact-card">
          <aside className="contact-info">
            <p className="eyebrow">Get in touch</p>
            <h3>Let’s work together</h3>
            <p>Send me a message with the form, or reach me directly:</p>
            <ul className="contact-links">
              <li>
                <span>Email</span>
                <a href={`mailto:${MY_EMAIL}`}>{MY_EMAIL}</a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/gluay-s-wang/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/gluay-s-wang
                </a>
              </li>
              <li>
                <span>GitHub</span>
                <a
                  href="https://github.com/Gluay88"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Gluay88
                </a>
              </li>
            </ul>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  placeholder="Jane"
                  autoComplete="given-name"
                  required
                  {...fieldProps("firstName")}
                />
                {fieldError("firstName")}
              </div>

              <div className="form-field">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  autoComplete="family-name"
                  required
                  {...fieldProps("lastName")}
                />
                {fieldError("lastName")}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="jane@example.com"
                autoComplete="email"
                required
                {...fieldProps("email")}
              />
              {fieldError("email")}
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="How can I help?"
                rows={6}
                required
                {...fieldProps("message")}
              ></textarea>
              {fieldError("message")}
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="btn-primary"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send message"}
                <svg
                  className="send-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>

            {status === "success" && (
              <p className="form-status" role="status">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="form-status form-status-error" role="alert">
                Sorry, something went wrong. Please email me at{" "}
                <a href={`mailto:${MY_EMAIL}`}>{MY_EMAIL}</a>.
              </p>
            )}
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
