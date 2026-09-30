import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/app/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Rajo Charity. We would be glad to hear from you.",
};

export default function ContactPage() {
  return (
    <section className="container contact-grid">
      <div className="contact-copy">
        <span className="eyebrow">Contact us</span>
        <h1>We’re here to listen.</h1>
        <p>
          Whether you have a question, would like to volunteer, or want to learn more about our
          work, we welcome your message.
        </p>
        <div className="contact-detail">
          <span>Send us a note</span>
          <Link href="#contact-form">Use the contact form</Link>
        </div>
      </div>
      <div id="contact-form">
        <ContactForm />
      </div>
    </section>
  );
}