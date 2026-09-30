"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="message">How can we help?</label>
        <textarea id="message" name="message" rows={6} required />
      </div>
      <p className="form-note">This form is a preview and does not send messages yet.</p>
      <div>
        <button className="button-primary" type="submit">Send message</button>
      </div>
      {submitted && (
        <p className="form-success" role="status">
          Thank you for reaching out. This preview has not sent your message.
        </p>
      )}
    </form>
  );
}