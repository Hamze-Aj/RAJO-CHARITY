"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact Us" },
];

export function PrimaryNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`menu-icon${menuOpen ? " is-open" : ""}`} aria-hidden="true" />
      </button>
      <nav
        className={`primary-nav${menuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}