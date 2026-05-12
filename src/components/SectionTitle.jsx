import "./SectionTitle.css";

function SectionTitle({ title, subtitle, center = true }) {
  return (
    <header className={`section-title ${center ? "text-center" : "text-start"}`} data-aos="fade-up">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </header>
  );
}

export default SectionTitle;
