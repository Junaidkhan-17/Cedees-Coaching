import "./VideoCard.css";

function VideoCard({ data, delay = 0 }) {
  return (
    <article
      className={`video-card ${data.featured ? "video-card-featured" : ""}`}
      data-aos="zoom-in"
      data-aos-delay={delay}
      data-aos-duration="750"
    >
      <div className="video-image-wrap">
        <img loading="lazy" src={data.image} alt={data.title} className="video-image image-scroll" />
        <button type="button" className="play-btn" aria-label="Play video preview">
          ▶
        </button>
      </div>

      {data.featured ? (
        <div className="video-feature-overlay">
          <div className="video-user-avatar">👤</div>
          <div>
            <h3>{data.topperName}</h3>
            <p>{data.topperRank}</p>
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default VideoCard;
