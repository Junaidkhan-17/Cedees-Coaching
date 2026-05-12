import { useEffect, useState } from "react";
import { navLinks } from "../data/siteData";
import cedeeslogobgremove from "../images/owner/cedeeslogobgremove.png";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 991) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 991) {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg cedees-navbar sticky-top">
      <div className="container cedees-navbar-inner">
        <a className="navbar-brand cedees-logo" href="#top">
          <img src={cedeeslogobgremove} alt="CEDEES Coaching Classes Logo" className="logo-image"  />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
          aria-controls="mainNav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`navbar-collapse cedees-mobile-drawer ${isMobileMenuOpen ? "show" : ""}`}
          id="mainNav"
        >
          <ul className="navbar-nav mx-auto">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <a
                  className="nav-link cedees-nav-link"
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn cedees-contact-btn"
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>

        <button
          type="button"
          className={`cedees-nav-backdrop ${isMobileMenuOpen ? "show" : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close mobile navigation"
          tabIndex={isMobileMenuOpen ? 0 : -1}
        />
      </div>
    </nav>
  );
}

export default Navbar;
