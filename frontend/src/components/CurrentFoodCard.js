import React from "react";
import ItemCard from "./ItemCard";
import "../styles/Cards.css";

const Cards = ({ food, subtitle, cardData }) => {
  

  return (
    <div className="cards-wrapper">
      <div className="cards-header">{food}</div>
      <div className="cards-subtitle">{subtitle}</div>
      <div className="cards-container">
        {cardData.map((card) => (
          <ItemCard
            key={card.id}
            image={card.image}
            title={card.title}
            views={card.views}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
