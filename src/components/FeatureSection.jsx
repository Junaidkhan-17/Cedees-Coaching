import "./FeatureSection.css";

function FeatureSection({ feature, delay = 0 }) {
  return (
    <div className="feature-column" id={feature.sectionId} data-aos="fade-up" data-aos-delay={delay}>
      <div className="feature-heading">
        <span className="feature-icon" aria-hidden="true">
          {feature.icon}
        </span>
        <div>
          <h3>{feature.title}</h3>
          <p>{feature.subtitle}</p>
        </div>
      </div>
      <div className="feature-image-wrap">
        <img loading="lazy" src={feature.image} alt={feature.title} className="feature-image image-scroll" />
      </div>
    </div>
  );
}

export default FeatureSection;
