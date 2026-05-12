import "./FloatingContactButtons.css";

const phoneNumber = "9767635088";
const fullPhoneNumber = `+91${phoneNumber}`;
const whatsappLink = `https://wa.me/${fullPhoneNumber.replace("+", "")}`;
const callLink = `tel:${fullPhoneNumber}`;

function FloatingContactButtons() {
  return (
    <div className="floating-contact-buttons" aria-label="Quick contact actions">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="floating-contact-btn whatsapp-btn"
        aria-label={`Chat on WhatsApp at ${phoneNumber}`}
        title="WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-8.7 14.93L2 22l5.2-1.35A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.16l-.3-.18-3.08.8.82-3-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.12c-.24-.12-1.4-.7-1.62-.78-.21-.08-.36-.12-.52.12-.15.24-.59.78-.72.93-.13.16-.27.18-.5.06-.24-.12-1-.37-1.9-1.19a7.07 7.07 0 0 1-1.32-1.64c-.14-.24-.02-.37.1-.49.1-.1.24-.27.35-.4.12-.13.16-.23.24-.39.08-.15.04-.28-.02-.4-.07-.12-.52-1.26-.71-1.73-.19-.45-.39-.39-.52-.39h-.45c-.16 0-.4.06-.6.28-.2.24-.79.77-.79 1.88 0 1.1.8 2.16.92 2.31.11.16 1.56 2.38 3.79 3.35 2.22.96 2.22.64 2.62.6.4-.03 1.3-.53 1.48-1.04.18-.51.18-.95.12-1.04-.06-.08-.22-.12-.46-.24Z"
          />
        </svg>
        <span className="floating-contact-label">WhatsApp</span>
      </a>
      <a
        href={callLink}
        className="floating-contact-btn call-btn"
        aria-label={`Call ${phoneNumber}`}
        title="Call"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M6.62 10.79a15.02 15.02 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.75-.24 1.02l-2.2 2.2Z"
          />
        </svg>
        <span className="floating-contact-label">Call</span>
      </a>
    </div>
  );
}

export default FloatingContactButtons;
