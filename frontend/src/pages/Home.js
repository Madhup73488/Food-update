import React from "react";
import "../styles/Home.css";
import Cards from "../components/Cards";
function App() {
  return (
    <>
      <div className="container">
        <h1>Welcome To Online Canteen</h1>
        <h2>Fresh Food, Daily Updates</h2>
        <p>
          Explore the menu and discover what's available in the canteen today.
        </p>
        <button className="button">View Today's Menu</button>
      </div>

      <div className="breakfast-container">
        <Cards food={"breakfast items"} subtitle={"Delicious & Nutritious Breakfast Options to Start Your Day Right"} />
      </div>

      <div className="lunch-container">
        <Cards food={"Lunch items"} subtitle={"Hearty and Flavorful Meals to Keep You Energized Throughout the Day"} />
      </div>

      <div className="dinner-container">
        <Cards food={"Dinner items"} subtitle={"Satisfying Dishes for a Relaxing and Delicious End to Your Day"} />
      </div>
    </>
  );
}

export default App;
