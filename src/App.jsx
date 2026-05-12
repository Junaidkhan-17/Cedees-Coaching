import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import SectionTitle from "./components/SectionTitle";
import TopperTalk from "./components/TopperTalk";
import ReviewCard from "./components/ReviewCard";
import Session from "./components/session";
import CTA from "./components/CTA";
import PersonalMentor from "./components/PersonalMentor";
import MakeSpecial from "./components/makespecial";
import FloatingContactButtons from "./components/FloatingContactButtons";
import Footer from "./components/Footer";
import {
  toppers,
  reviews,
  makespecial as makeSpecialCards,
  topperTalk as topperTalkCards,
  personalMentor as personalMentors,
} from "./data/siteData";

import "./App.css";


function App() {
  const toppersScrollRef = useRef(null);
  const topperTalkScrollRef = useRef(null);
  const makeSpecialScrollRef = useRef(null);
  const reviewsScrollRef = useRef(null);
  const mentorsScrollRef = useRef(null);

  const [focusedTopperIndex, setFocusedTopperIndex] = useState(0);
  const [focusedTopperTalkIndex, setFocusedTopperTalkIndex] = useState(0);
  const [focusedMakeSpecialIndex, setFocusedMakeSpecialIndex] = useState(0);
  const [focusedReviewIndex, setFocusedReviewIndex] = useState(0);
  const [focusedMentorIndex, setFocusedMentorIndex] = useState(0);
  const [popupCard, setPopupCard] = useState(null);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 850,
      easing: "ease-out-cubic",
    });
  }, []);

  const scrollToppers = (direction) => {
    const rail = toppersScrollRef.current;
    if (!rail) return;

    const firstCard = rail.querySelector(".topper-scroll-item");
    const gap = 18;
    const cardWidth = firstCard ? firstCard.clientWidth + gap : 220;
    rail.scrollBy({
      left: direction === "next" ? cardWidth * 2 : -cardWidth * 2,
      behavior: "smooth",
    });
  };

  const scrollTopperTalk = (direction) => {
    const rail = topperTalkScrollRef.current;
    if (!rail) return;

    const firstCard = rail.querySelector(".topper-scroll-item");
    const gap = 18;
    const cardWidth = firstCard ? firstCard.clientWidth + gap : 220;
    rail.scrollBy({
      left: direction === "next" ? cardWidth * 2 : -cardWidth * 2,
      behavior: "smooth",
    });
  };

  const scrollMakeSpecial = (direction) => {
    const rail = makeSpecialScrollRef.current;
    if (!rail) return;

    const firstCard = rail.querySelector(".topper-scroll-item");
    const gap = 18;
    const cardWidth = firstCard ? firstCard.clientWidth + gap : 220;
    rail.scrollBy({
      left: direction === "next" ? cardWidth * 2 : -cardWidth * 2,
      behavior: "smooth",
    });
  };

  const openPopup = (card) => {
    setPopupCard(card);
  };

  const closePopup = () => {
    setPopupCard(null);
  };

  useEffect(() => {
    const rail = toppersScrollRef.current;
    if (!rail) return undefined;

    let rafId = null;

    const updateFocusedCard = () => {
      const cards = Array.from(rail.querySelectorAll(".topper-scroll-item"));
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

      setFocusedTopperIndex((prevIndex) =>
        prevIndex === nearestIndex ? prevIndex : nearestIndex,
      );
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
  }, []);

  useEffect(() => {
    if (!popupCard) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [popupCard]);

  useEffect(() => {
    const rail = topperTalkScrollRef.current;
    if (!rail) return undefined;

    let rafId = null;

    const updateFocusedCard = () => {
      const cards = Array.from(rail.querySelectorAll(".topper-scroll-item"));
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

      setFocusedTopperTalkIndex((prevIndex) =>
        prevIndex === nearestIndex ? prevIndex : nearestIndex,
      );
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
  }, []);

  useEffect(() => {
    const rail = makeSpecialScrollRef.current;
    if (!rail) return undefined;

    let rafId = null;

    const updateFocusedCard = () => {
      const cards = Array.from(rail.querySelectorAll(".topper-scroll-item"));
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

      setFocusedMakeSpecialIndex((prevIndex) =>
        prevIndex === nearestIndex ? prevIndex : nearestIndex,
      );
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
  }, []);

  useEffect(() => {
    const rail = reviewsScrollRef.current;
    if (!rail) return undefined;

    let rafId = null;

    const updateFocusedCard = () => {
      const cards = Array.from(rail.querySelectorAll(".topper-scroll-item"));
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

      setFocusedReviewIndex((prevIndex) =>
        prevIndex === nearestIndex ? prevIndex : nearestIndex,
      );
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
  }, []);

  useEffect(() => {
    const rail = mentorsScrollRef.current;
    if (!rail) return undefined;

    let rafId = null;

    const updateFocusedCard = () => {
      const cards = Array.from(rail.querySelectorAll(".topper-scroll-item"));
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

      setFocusedMentorIndex((prevIndex) =>
        prevIndex === nearestIndex ? prevIndex : nearestIndex,
      );
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
  }, []);

  return (
    <div id="top" className="cedees-page-bg">
      <Navbar />

      <main className="main-spacing">
        <section id="toppers" className="cedees-section section-topper">
          <div className="container">
            <SectionTitle
              title="Toppers from CEDEES Nagpur Centre"
              subtitle="(Profiles of toppers.)"
            />

            <div className="toppers-controls" data-aos="fade-up">
              <button
                type="button"
                className="topper-nav-btn"
                onClick={() => scrollToppers("prev")}
                aria-label="Show previous toppers"
              >
                Prev
              </button>
              <button
                type="button"
                className="topper-nav-btn"
                onClick={() => scrollToppers("next")}
                aria-label="Show next toppers"
              >
                Next
              </button>
            </div>

            <div className="image-gallery-wrap">
              <div className="toppers-scroll-row" ref={toppersScrollRef}>
                {toppers.map((topper, index) => (
                  <div
                    className="topper-scroll-item"
                    key={`main-${topper.id}-${index}`}
                  >
                    <TopperTalk
                      topper={topper}
                      delay={index * 70}
                      onCardClick={() =>
                        openPopup({
                          image: topper.image,
                          name: topper.name,
                          exam: topper.exam,
                          rank: topper.rank,
                        })
                      }
                      focusLevel={
                        index === focusedTopperIndex
                          ? "current"
                          : Math.abs(index - focusedTopperIndex) === 1
                            ? "adjacent"
                            : "far"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="text-center section-btn-wrap"
              data-aos="fade-up"
            ></div>
          </div>
        </section>

        <section id="topper-talk" className="cedees-section section-topper">
          <div className="container">
            <SectionTitle
              title="Topper Talk ( Interactive Session with Topper's.)"
              subtitle="Profiles of topper's."
            />

            <div className="toppers-controls" data-aos="fade-up">
              <button
                type="button"
                className="topper-nav-btn"
                onClick={() => scrollTopperTalk("prev")}
                aria-label="Show previous make special cards"
              >
                Prev
              </button>
              <button
                type="button"
                className="topper-nav-btn"
                onClick={() => scrollTopperTalk("next")}
                aria-label="Show next make special cards"
              >
                Next
              </button>
            </div>

            <div className="image-gallery-wrap">
              <div className="toppers-scroll-row" ref={topperTalkScrollRef}>
                {topperTalkCards.map((item, index) => (
                  <div
                    className="topper-scroll-item"
                    key={`topper-talk-${item.id}-${index}`}
                  >
                    <TopperTalk
                      topperTalk={item}
                      delay={index * 70}
                      hideDetails
                      onCardClick={() =>
                        openPopup({
                          image: item.image,
                        })
                      }
                      focusLevel={
                        index === focusedTopperTalkIndex
                          ? "current"
                          : Math.abs(index - focusedTopperTalkIndex) === 1
                            ? "adjacent"
                            : "far"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="text-center section-btn-wrap"
              data-aos="fade-up"
            ></div>
          </div>
        </section>

        <section id="reviews" className="cedees-section section-review">
          <div className="container">
            <SectionTitle
              title="Reviews About CEDEES Nagpur."
              subtitle="(Student testimonials.)"
            />
            <div className="image-gallery-wrap">
              <div className="toppers-scroll-row" ref={reviewsScrollRef}>
                {reviews.map((review, index) => (
                  <div
                    className="topper-scroll-item"
                    key={`review-${review.id}-${index}`}
                  >
                    <ReviewCard
                      review={review}
                      delay={index * 80}
                      onCardClick={() =>
                        openPopup({
                          image: review.image,
                          name: review.name,
                          text: review.text || "Student Review",
                        })
                      }
                      focusLevel={
                        index === focusedReviewIndex
                          ? "current"
                          : Math.abs(index - focusedReviewIndex) === 1
                            ? "adjacent"
                            : "far"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="text-center section-btn-wrap"
              data-aos="fade-up"
            ></div>
          </div>
        </section>

        <section id="session" className="cedees-section section-session">
          <div className="container">
            <SectionTitle
              title="Offline Sessions with Expert Faculty (Clinical Subject)."
              subtitle="(Interactive classroom moments from CEDEES.)"
            />
            <Session
              onCardClick={(item, index) =>
                openPopup({
                  image: item.image,
                  title: item.title || `Session ${index + 1}`,
                })
              }
            />
          </div>
        </section>

        <section id="make-special" className="cedees-section section-topper">
          <div className="container">
            <SectionTitle
              title="What Make's CEDEES Nagpur Special."
              subtitle="(Special Achievers & Highlights.)"
            />

            <div className="image-gallery-wrap">
              <div className="toppers-scroll-row" ref={makeSpecialScrollRef}>
                {makeSpecialCards.map((item, index) => (
                  <div
                    className="topper-scroll-item"
                    key={`make-special-${item.id}-${index}`}
                  >
                    <MakeSpecial
                      makespecial={item}
                      delay={index * 70}
                      onCardClick={() =>
                        openPopup({
                          image: item.image,
                          name: item.text,
                          exam: item.exam,
                          rank: item.rank,
                        })
                      }
                      focusLevel={
                        index === focusedMakeSpecialIndex
                          ? "current"
                          : Math.abs(index - focusedMakeSpecialIndex) === 1
                            ? "adjacent"
                            : "far"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <section id="talk" className="cedees-section section-talk">
          <div className="container">
            <SectionTitle
              title="Toppers Talk (Interactive Session with Toppers)"
              subtitle=""
              center={false}
            />
            <div className="row g-4">
              
            </div>

            <div className="row g-4 feature-grid" id="why-cedees">
              {features.map((feature, index) => (
                <div className="col-lg-6" key={feature.id}>
                  <FeatureSection feature={feature} delay={index * 100} />
                </div>
              ))}
            </div>
          </div>
        </section>
        */}


        <section id="mentorship" className="cedees-section section-topper">
          <div className="container">
            <SectionTitle
              title="Personal Mentor (1 on 1 Guidance) from Expert Faculty."
              subtitle="From Expert faculty Dr Abhas ( 10 years of Academic experience)"
            />
            <div className="image-gallery-wrap">
              <div className="toppers-scroll-row" ref={mentorsScrollRef}>
                {personalMentors.map((mentor, index) => (
                  <div
                    className="topper-scroll-item"
                    key={`mentor-${mentor.id}-${index}`}
                  >
                    <PersonalMentor
                      personalmentor={mentor}
                      delay={index * 70}
                      onCardClick={() =>
                        openPopup({
                          image: mentor.image,
                         
                        })
                      }
                      focusLevel={
                        index === focusedMentorIndex
                          ? "current"
                          : Math.abs(index - focusedMentorIndex) === 1
                            ? "adjacent"
                            : "far"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {popupCard ? (
        <div className="card-popup-overlay" onClick={closePopup}>
          <div
            className="card-popup-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="card-popup-close"
              onClick={closePopup}
              aria-label="Close popup"
            >
              x
            </button>
            <div className="card-popup-image-wrap">
              <img
                src={popupCard.image}
                alt={popupCard.name || popupCard.title || "Card preview"}
                className="card-popup-image"
              />
            </div>
            {popupCard.name ||
            popupCard.title ||
            popupCard.exam ||
            popupCard.rank ||
            popupCard.text ? (
              <div className="card-popup-meta">
                {popupCard.name ? <h3>{popupCard.name}</h3> : null}
                {popupCard.title ? <h3>{popupCard.title}</h3> : null}
                {popupCard.exam ? <p>Exam: {popupCard.exam}</p> : null}
                {popupCard.rank ? <span>Rank: {popupCard.rank}</span> : null}
                {popupCard.text ? <p>{popupCard.text}</p> : null}
              </div>
            ) : null}
          </div>
        </div>

      ) : null}
      <CTA />
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}

export default App;
