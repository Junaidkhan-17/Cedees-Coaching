import { memo } from "react";
import "./PersonalMentor.css";

function PersonalMentor({ personalmentor, delay = 0, focusLevel = "far", onCardClick }) {
  const handleKeyDown = (event) => {
    if (!onCardClick) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onCardClick();
    }
  };

  return (
    <article
      className={`topper-card topper-card--${focusLevel}`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onCardClick}
      onKeyDown={handleKeyDown}
      role={onCardClick ? "button" : undefined}
      tabIndex={onCardClick ? 0 : undefined}
      aria-label={onCardClick ? `Open ${personalmentor.name} mentor card popup` : undefined}
    >
      <div className="topper-image-wrap">
        <img
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          src={personalmentor.image}
          alt={personalmentor.name}
          className="topper-image"
        />
      </div>
      <div className="topper-content">
        
      </div>
    </article>
  );
}

export default memo(PersonalMentor);
