import React, { useState } from "react";
import "../App.css";
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
      <div className="container-all">
        <h2>Please say hello!</h2>

        <div id="contact-form">
          <h2>
            Contact Glu@y{" "}
            <svg
              style={{
                width: "28px",
                transform: "rotate(-45deg)",
                margin: "0 0 0 -8px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </h2>
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Enter name"
              autoComplete="given-name"
              required
              {...fieldProps("firstName")}
            />
            {fieldError("firstName")}

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              autoComplete="family-name"
              required
              {...fieldProps("lastName")}
            />
            {fieldError("lastName")}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              autoComplete="email"
              required
              {...fieldProps("email")}
            />
            {fieldError("email")}

            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Enter message"
              required
              {...fieldProps("message")}
            ></textarea>
            {fieldError("message")}

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Submit"}
            </button>

            {status === "success" && (
              <p className="form-status">Thanks! Your message has been sent.</p>
            )}
            {status === "error" && (
              <p className="form-status form-status-error">
                Sorry, something went wrong. Please email me at{" "}
                <a href={`mailto:${MY_EMAIL}`}>{MY_EMAIL}</a>.
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
