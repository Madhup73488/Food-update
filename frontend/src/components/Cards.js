import React from "react";
import ItemCard from "./ItemCard";
import "../styles/Cards.css";

const Cards = ({ food, subtitle }) => {
  const cardData = [
    {
      id: 1,
      image:
        "https://static.vecteezy.com/system/resources/previews/046/100/506/non_2x/wide-angle-shot-of-nigerian-jollof-rice-with-tomatoes-and-spices-isolated-on-white-background-photo.jpg",
      title: "When life gives you oranges",
      views: "2,465",
      date: "Jul 26, 2019",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-photo/famous-food-dish-isolated-white-background_941097-216017.jpg",
      title: "Embrace the blues",
      views: "3,210",
      date: "Aug 15, 2021",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-photo/national-food-india-with-white-background-high-q_889056-6602.jpg",
      title: "A world in color",
      views: "1,876",
      date: "Mar 5, 2020",
    },
    {
      id: 4,
      image:
        "https://www.pngitem.com/pimgs/m/333-3335707_set-dosa-images-hd-png-transparent-png.png",
      title: "A world in color",
      views: "1,876",
      date: "Mar 5, 2020",
    },
    {
      id: 5,
      image:
        "https://thumbs.dreamstime.com/b/idli-sambar-bowl-white-background-indian-dish-south-favourite-food-rava-semolina-idly-rava-idly-75110197.jpg",
      title: "A world in color",
      views: "1,876",
      date: "Mar 5, 2020",
    },
    {
      id: 6,
      image:
        "https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-traditional-chapati-tortillas-isolated-created-with-generative-ai-png-image_10204193.png",
      title: "When life gives you oranges",
      views: "2,465",
      date: "Jul 26, 2019",
    },
    {
      id: 7,
      image:
        "https://www.shutterstock.com/image-illustration/south-indiana-popular-food-appe-600nw-2338270619.jpg",
      title: "Embrace the blues",
      views: "3,210",
      date: "Aug 15, 2021",
    },
    {
      id: 8,
      image:
        "https://www.indianveggiedelight.com/wp-content/uploads/2021/11/ven-pongal-featured.jpg",
      title: "A world in color",
      views: "1,876",
      date: "Mar 5, 2020",
    },
    {
      id: 9,
      image:
        "https://mysorecafe.com.au/wp-content/uploads/2022/07/Tamarind-Rice.png",
      title: "A world in color",
      views: "1,876",
      date: "Mar 5, 2020",
    },
    {
      id: 10,
      image:
        "https://palatesdesire.com/wp-content/uploads/2022/07/vegetable-bath-recipe@palates-desire.jpg",
      title: "A world in color",
      views: "1,876",
      date: "Mar 5, 2020",
    },
  ];

  return (
    <div className="cards-wrapper">
      <div className="cards-header">Popular {food}</div>
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
