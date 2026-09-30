import Image from "next/image";
import Link from "next/link";
import { PrimaryNavigation } from "@/app/components/primary-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/about" aria-label="Rajo Charity home">
          <Image src="/rajo-logo-removebg-preview.png" alt="Rajo Charity logo" width={612} height={408} priority />
          <span className="brand-copy">
            <span className="brand-name">Rajo Charity</span>
            <span className="brand-note">Care that reaches further</span>
          </span>
        </Link>
        <PrimaryNavigation />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div>
            <Link className="brand" href="/about" aria-label="Rajo Charity home">
              <Image src="/rajo-logo-removebg-preview.png" alt="Rajo Charity logo" width={612} height={408} />
              <span className="brand-copy">
                <span className="brand-name">Rajo Charity</span>
                <span className="brand-note">Care that reaches further</span>
              </span>
            </Link>
            <p className="footer-mission">
              We help children from vulnerable families access Qur’anic education in Jigjiga.
            </p>
          </div>
          <div className="footer-contact">
            <span className="footer-contact-label">Get in touch</span>
            <Link href="/contact">Send us a message</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Rajo Charity</p>
          <p>Rooted in care. Growing together.</p>
        </div>
      </div>
    </footer>
  );
}