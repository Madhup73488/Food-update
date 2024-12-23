import React, { useState } from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [foodItems, setFoodItems] = useState([
    {
      id: 1,
      image:
        "https://static.vecteezy.com/system/resources/previews/046/100/506/non_2x/wide-angle-shot-of-nigerian-jollof-rice-with-tomatoes-and-spices-isolated-on-white-background-photo.jpg",
      title: "Puliyogare",
    },
    {
      id: 2,
      image:
        "https://www.shutterstock.com/image-illustration/south-indiana-popular-food-appe-600nw-2338270619.jpg",
      title: "Paddu",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-photo/upma-with-white-background-high-quality-ultra-hd_889056-5823.jpg",
      title: "Uppittu",
    },
    {
      id: 4,
      image:
        "https://www.pngitem.com/pimgs/m/333-3335707_set-dosa-images-hd-png-transparent-png.png",
      title: "Set dosa",
    },
    {
      id: 5,
      image:
        "https://thumbs.dreamstime.com/b/idli-sambar-bowl-white-background-indian-dish-south-favourite-food-rava-semolina-idly-rava-idly-75110197.jpg",
      title: "Small Idli",
    },
    {
      id: 6,
      image:
        "https://media.istockphoto.com/id/1083237342/photo/nariyal-or-coconut-chutney-served-in-a-bowl-isolated-over-moody-background-selective-focus.jpg?s=612x612&w=0&k=20&c=LT4pMo5RTCCraJIFlIKMXbiGxfW30Yr7BdpQhR1NxWI=",
      title: "Naariyal chutney",
    },
    {
      id: 7,
      image:
        "https://www.indianveggiedelight.com/wp-content/uploads/2020/06/onion-tomato-chutney-featured.jpg",
      title: "Tomato chutney",
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [isSelectMode, setIsSelectMode] = useState(false);

  const buildings = ["Stallion", "Indiqube", "Ness"];

  const handleCheckboxChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handlePublish = () => {
    if (!selectedBuilding) {
      alert("Please select a building.");
      return;
    }

    const selectedData = {
      building: selectedBuilding,
      items: foodItems.filter((item) => selectedItems.includes(item.id)),
    };

    fetch("/api/submit-food-items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Items published successfully!");
        setIsSelectMode(false);
        setSelectedItems([]);
        setSelectedBuilding("");
      })
      .catch((err) => console.error("Error publishing items:", err));
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Canteen Dashboard</h1>
        <div className="header-actions">
          <select
            className="building-dropdown"
            value={selectedBuilding}
            onChange={(e) => setSelectedBuilding(e.target.value)}
          >
            <option value="">Select Building</option>
            {buildings.map((building) => (
              <option key={building} value={building}>
                {building}
              </option>
            ))}
          </select>
          <button
            className="select-items-btn"
            onClick={() => setIsSelectMode(!isSelectMode)}
          >
            {isSelectMode ? "Cancel" : "Select Items"}
          </button>
        </div>
      </header>

      <div className="food-cards">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className={`food-card ${
              selectedItems.includes(item.id) ? "selected" : ""
            }`}
            onClick={() => handleCheckboxChange(item.id)}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            {isSelectMode && (
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  readOnly
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {isSelectMode && selectedItems.length > 0 && (
        <button className="publish-btn" onClick={handlePublish}>
          Publish
        </button>
      )}
    </div>
  );
};

export default Dashboard;
