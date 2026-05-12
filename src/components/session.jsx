import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { session as sessionData } from "../data/siteData";
import "./session.css";

function Session({ items = sessionData, onCardClick }) {
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const cardRefs = useRef([]);
  const imageRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || !cardRefs.current.length) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        { y: 36, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          stagger: 0.07,
          ease: "power3.out",
        }
      );

      imageRefs.current.forEach((image, index) => {
        if (!image) return;
        gsap.to(image, {
          yPercent: index % 2 === 0 ? -2 : 2,
          duration: 3.2 + (index % 4) * 0.35,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, section);

    return () => ctx.revert();
  }, [items]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    let rafId = null;

    const updateFocusedCard = () => {
      const cards = cardRefs.current.filter(Boolean);
      if (!cards.length) return;

      const railRect = rail.getBoundingClientRect();
      const railCenter = railRect.left + railRect.width / 2;

      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(railCenter - cardCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveIndex((prevIndex) => (prevIndex === nearestIndex ? prevIndex : nearestIndex));
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateFocusedCard();
        rafId = null;
      });
    };

    updateFocusedCard();
    rail.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateFocusedCard);

    return () => {
      rail.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateFocusedCard);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [items]);

  useLayoutEffect(() => {
    if (!cardRefs.current.length) return;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const distanceFromActive = Math.abs(index - activeIndex);
      const isActive = distanceFromActive === 0;
      const isAdjacent = distanceFromActive === 1;

      gsap.to(card, {
        scale: isActive ? 1.03 : 0.98,
        opacity: isActive ? 1 : isAdjacent ? 0.9 : 0.72,
        duration: 0.45,
        ease: "power3.out",
      });
    });

    imageRefs.current.forEach((image, index) => {
      if (!image) return;
      const distanceFromActive = Math.abs(index - activeIndex);
      const isActive = distanceFromActive === 0;
      const isAdjacent = distanceFromActive === 1;

      gsap.to(image, {
        scale: isActive ? 1.08 : isAdjacent ? 1.02 : 1,
        filter: isActive
          ? "saturate(1) contrast(1)"
          : isAdjacent
            ? "saturate(0.86) contrast(0.92)"
            : "saturate(0.74) contrast(0.86)",
        duration: 0.45,
        ease: "power3.out",
      });
    });
  }, [activeIndex]);

  return (
    <section className="session-gallery-wrap" ref={sectionRef}>
      <div className="session-gallery-row" ref={railRef}>
        {items.map((item, index) => {
          const sessionTitle = item.title || `Session ${item.id}`;

          return (
            <article
              key={item.id}
              className="session-card"
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              tabIndex={0}
              onClick={() => onCardClick?.(item, index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onCardClick?.(item, index);
                }
              }}
            >
              <div className="session-image-shell">
                <img
                  ref={(el) => {
                    imageRefs.current[index] = el;
                  }}
                  src={item.image}
                  alt={sessionTitle}
                  className="session-image"
                  loading="lazy"
                />
              </div>
              <p className="session-caption"> Offline {sessionTitle}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Session;
