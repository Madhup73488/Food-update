import React, { useState } from "react";
import "../styles/ItemCard.css";
import { Link } from "react-router-dom";

const ItemCard = ({ image, title, views, date }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked((prevState) => !prevState); // Toggle the like state
    // Optional: call the parent's callback
  };

  return (
    <div className="card-list">
      <article className="card">
        {/* Card Image */}
        <figure className="card-image">
          <img src={image} alt={title} />
        </figure>

        {/* Card Header */}
        <div className="card-header">
          <Link to="#">{title}</Link>
          <button className="icon-button" onClick={handleHeartClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isLiked ? "#63b2f2" : "none"} // Change color based on the state
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              display="block"
              id="Heart"
            >
              <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
            </svg>
          </button>
        </div>

        {/* Card Footer */}
        <div className="card-footer">
          <div className="card-meta card-meta--views">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              display="block"
              id="EyeOpen"
            >
              <path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {views}
          </div>
          <div className="card-meta card-meta--date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              display="block"
              id="Calendar"
            >
              <rect x="2" y="4" width="20" height="18" rx="4" />
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <path d="M2 10h20" />
            </svg>
            {date}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ItemCard;
