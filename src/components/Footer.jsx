import { navLinks } from "../data/siteData";
import cedeesLogo from "../images/owner/cedeeslogobgremove.png";
import "./Footer.css";
import webdocklogo from "../images/owner/webdocklogo.png";

const instagramUrl =
  "https://www.instagram.com/reel/DTrjnNwDJWt/?igsh=MXFxeHZ2YnowbWk4aw==";
const addressText =
  "First floor 103, Kanishka Apartment, Jaitala, Nagpur 440036";
const addressMapUrl =
  "https://www.google.com/maps/search/?api=1&query=First%20floor%20103%2C%20Kanishka%20Apartment%2C%20Jaitala%2C%20Nagpur%204400036";

function Footer() {
  return (
    <footer className="cedees-footer">
      <div className="container cedees-footer-main">
        <div className="cedees-footer-brand-stack">
          <h4 className="sentence"> Follow us on Instagram... </h4>
           <h4 className="line"> click on below link</h4>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cedees-instagram-btn"
            aria-label="Visit CEDEES Instagram"
          >
            <span className="cedees-instagram-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.85 2.3a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
              </svg>
            </span>
            <span className="cedees-instagram-text">Instagram</span>
          </a>

          <a className="cedees-footer-brand" href="#top" aria-label="Go to top">
            <img src={cedeesLogo} alt="CEDEES Logo" className="cedees-footer-logo" />
          </a>
        </div>

        <div className="cedees-footer-center">
          <nav className="cedees-footer-nav" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="cedees-footer-link">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={addressMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cedees-footer-address"
            aria-label={`Open location in map: ${addressText}`}
          >
            Address: {addressText}
          </a>
        </div>
      </div>

      <div className="container cedees-footer-bottom">
        <p className="cedees-footer-copy">Copyright {new Date().getFullYear()} CEDEES Nagpur</p>
        <a
          href="https://webdockstudios.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="cedees-powered-by"
          aria-label="Powered by WebDocks"
        >
          <span>Powered by</span>
          <img src={webdocklogo} alt="WebDocks Logo" className="webdocks-logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
