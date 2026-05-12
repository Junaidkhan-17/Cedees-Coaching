import { memo } from "react";
import "./TopperTalk.css";

function TopperTalk({
  topper,
  topperTalk,
  delay = 0,
  focusLevel = "far",
  onCardClick,
  hideDetails = false,
}) {
  const profile = topperTalk ?? topper;

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
      aria-label={
        onCardClick
          ? `Open ${profile?.name || "topper"} card popup`
          : undefined
      }
    >
      <div className="topper-image-wrap">
        <img
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          src={profile?.image}
          alt={profile?.name || "Topper"}
          className="topper-image"
        />
      </div>

      {!hideDetails ? (
        <div className="topper-content">
          <h3>{profile?.name || "Topper"}</h3>
          <p>{profile?.exam || "Exam"}</p>

          {/* ✅ Only render Rank if it exists */}
          {profile?.rank && (
            <span>Rank: {profile.rank}</span>
          )}
        </div>
      ) : null}
    </article>
  );
}

export default memo(TopperTalk);
