import { memo } from "react";
import "./ReviewCard.css";

function ReviewCard({ review, delay = 0, focusLevel = "far", onCardClick }) {
  const reviewText = review.text || "Student Review";

  const handleKeyDown = (event) => {
    if (!onCardClick) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onCardClick();
    }
  };

  const hasRank =
    review.rank !== undefined &&
    review.rank !== null &&
    review.rank !== "";

  return (
    <article
      className={`topper-card review-card topper-card--${focusLevel}`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onCardClick}
      onKeyDown={handleKeyDown}
      role={onCardClick ? "button" : undefined}
      tabIndex={onCardClick ? 0 : undefined}
      aria-label={
        onCardClick
          ? `Open ${review.name} review card popup`
          : undefined
      }
    >
      <div className="topper-image-wrap review-image-wrap">
        <img
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          src={review.image}
          alt={review.name}
          className="topper-image"
        />
      </div>

      <div className="topper-content">
        {/* Name always visible */}
        <h3 className="review-name">{review.name}</h3>

        {/* Show Rank ONLY if it exists */}
        {hasRank && (
          <p className="review-rank">
            Rank: {review.rank}
          </p>
        )}
      </div>
    </article>
  );
}

export default memo(ReviewCard);
