import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./makespecial.css";

function MakeSpecial({
  makespecial,
  delay = 0,
  focusLevel = "far",
  onCardClick,
}) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const text = makespecial?.text;

  const hasText =
    text !== undefined &&
    text !== null &&
    text !== "";

  const cardLabel = text || "Make Special";

  const handleKeyDown = (event) => {
    if (!onCardClick) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onCardClick();
    }
  };

  useLayoutEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    if (!card || !image) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 24, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          delay: delay / 1000,
        }
      );

      gsap.fromTo(
        image,
        { scale: 1.16 },
        {
          scale: 1.05,
          duration: 1.2,
          ease: "power2.out",
          delay: delay / 1000 + 0.12,
        }
      );

      // Animate text only if present
      if (hasText && content) {
        gsap.fromTo(
          content,
          { y: 8, opacity: 0.75 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power2.out",
            delay: delay / 1000 + 0.2,
          }
        );
      }
    }, card);

    return () => ctx.revert();
  }, [delay, hasText]);

  useLayoutEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    if (!card || !image) return;

    if (focusLevel === "current") {
      gsap.to(card, { scale: 1.01, opacity: 1, duration: 0.45, ease: "power3.out" });
      gsap.to(image, {
        filter: "saturate(1) contrast(1)",
        scale: 1.05,
        duration: 0.5,
        ease: "power3.out",
      });

      if (hasText && content) {
        gsap.to(content, { opacity: 1, duration: 0.35, ease: "power2.out" });
      }
      return;
    }

    if (focusLevel === "adjacent") {
      gsap.to(card, { scale: 0.975, opacity: 0.9, duration: 0.45, ease: "power3.out" });
      gsap.to(image, {
        filter: "saturate(0.9) contrast(0.95)",
        scale: 1.01,
        duration: 0.5,
        ease: "power3.out",
      });

      if (hasText && content) {
        gsap.to(content, { opacity: 0.82, duration: 0.35, ease: "power2.out" });
      }
      return;
    }

    gsap.to(card, { scale: 0.95, opacity: 0.7, duration: 0.45, ease: "power3.out" });
    gsap.to(image, {
      filter: "saturate(0.75) contrast(0.9)",
      scale: 0.97,
      duration: 0.5,
      ease: "power3.out",
    });

    if (hasText && content) {
      gsap.to(content, { opacity: 0.68, duration: 0.35, ease: "power2.out" });
    }
  }, [focusLevel, hasText]);

  return (
    <article
      ref={cardRef}
      className={`makespecial-card makespecial-card--${focusLevel}`}
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="700"
      onClick={onCardClick}
      onKeyDown={handleKeyDown}
      role={onCardClick ? "button" : undefined}
      tabIndex={onCardClick ? 0 : undefined}
      aria-label={onCardClick ? `Open ${cardLabel} card popup` : undefined}
    >
      {/* ✅ Image ALWAYS renders */}
      <div className="makespecial-image-wrap">
        <img
          ref={imageRef}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          src={makespecial?.image}
          alt={cardLabel}
          className="makespecial-image"
        />
      </div>

      {/* ✅ Text renders ONLY if exists */}
      {hasText && (
        <div ref={contentRef} className="makespecial-content">
          <h3>{text}</h3>
        </div>
      )}
    </article>
  );
}

export default MakeSpecial;
