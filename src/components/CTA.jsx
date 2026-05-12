import { useState } from "react";
import "./CTA.css";
import directornew from "../images/owner/directornew.jpg";
import mentorImage from "../images/owner/arorasir.jpg";

function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const whatsappNumber = "919767635088";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const exam = (formData.get("exam") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    const whatsappMessage = [
      "Hi Cedees Team, I am interested in your mentorship program. Here are my details:",
      "",
      `Full Name: ${name}`,
      `Phone Number: ${phone}`,
      `Email Address: ${email || "Not provided"}`,
      `Target Exam: ${exam}`,
      `Message: ${message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="cta-section" data-aos="fade-up">
      <div className="container">
        <div className="director-intro-shell">
          <div className="director-intro-image-wrap">
            <img
              src={directornew}
              alt="Dr Raison Thomas, Director of CEDEES Coaching Classes"
              className="director-intro-image"
            />
          </div>
          <div className="director-intro-copy">
            <p className="director-intro-kicker">Leadership Note</p>
            <h2>Message from the Director</h2>
            <p>
              Dr Raison Thomas is a renowned periodontist, a motivational speaker,
              and founder and director of CEDEES Coaching Classes. He is currently
              a Professor in the Department of Periodontology at Bapuji Dental
              College and Hospital.
            </p>
            <p>
              He has trained thousands of dental students to secure top ranks in
              NEET MDS and INI-CET PG entrance exams. His teaching philosophy
              emphasizes persistence, and he believes that "The difference between
              ordinary and extraordinary student is that little Extra".
            </p>
          </div>
        </div>

        <div className="mentor-intro-shell">
          <div className="mentor-intro-image-wrap">
            <img
              src={mentorImage}
              alt="Dr Abhas Arora, Centre Mentor and Faculty"
              className="mentor-intro-image"
            />
          </div>
          <div className="mentor-intro-copy">
            <p className="mentor-intro-kicker">Academic Guidance</p>
            <h2>Message from Centre Head & Mentor </h2>
            <p>
              Dr Abhas Arora is currently a Professor in the Department of Public
              Health Dentistry. Under his guidance at Cedees Nagpur and Cedees
              Durg, several students each year secure top ranks across the nation
              in the NEET MDS and INICET competitive exams, and many students from
              private dental colleges have bagged MDS seats at AIIMS and GDCs.
            </p>
            <p>
              With an academic experience of more than 10 years, his tips, tricks,
              insightful discussions, motivational sessions, strategies, and strong
              bond with students help them nurture their preparation and secure the
              best results.
            </p>
          </div>
        </div>

        <div className="contact-shell">
          <div className="contact-copy">
            <p className="contact-kicker">Connect with CEDEES</p>
            <h2>Book Your Guidance Call</h2>
            <p>
              Tell us your exam target and we will help you with the right
              mentorship plan from our expert faculty.
            </p>
            <ul className="contact-points">
              <li>Personal mentor matching</li>
              <li>Offline + online strategy support</li>
              <li>Quick response from our team</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-grid">
              <label>
                Full Name
                <input type="text" name="name" placeholder="Enter your name" required />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" placeholder="Enter mobile number" required />
              </label>
            </div>
            <label className="message-field">
              Message
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us your current preparation stage..."
                required
              />
            </label>
            <button type="submit" className="contact-submit-btn">
              Send Inquiry
            </button>
            {submitted ? (
              <p className="contact-success">
                Thank you. Our team will contact you shortly.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTA;
