import React from "react";
import Cards from "../components/Cards";
import CurrentFoodCard from "../components/CurrentFoodCard";
function Stallion() {
  const breakFastData = [
    {
      id: 1,
      image:
        "https://static.vecteezy.com/system/resources/previews/046/100/506/non_2x/wide-angle-shot-of-nigerian-jollof-rice-with-tomatoes-and-spices-isolated-on-white-background-photo.jpg",
      title: "Puliyogare",
      views: "72",
      date: "Jul 26, 2019",
    },
    {
      id: 2,
      image:
        "https://www.shutterstock.com/image-illustration/south-indiana-popular-food-appe-600nw-2338270619.jpg",
      title: "Paddu",
      views: "82",
      date: "Aug 15, 2021",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-photo/upma-with-white-background-high-quality-ultra-hd_889056-5823.jpg",
      title: "Uppittu",
      views: "14",
      date: "Mar 5, 2020",
    },
    {
      id: 4,
      image:
        "https://www.pngitem.com/pimgs/m/333-3335707_set-dosa-images-hd-png-transparent-png.png",
      title: "Set dosa",
      views: "22",
      date: "Mar 5, 2020",
    },
    {
      id: 5,
      image:
        "https://thumbs.dreamstime.com/b/idli-sambar-bowl-white-background-indian-dish-south-favourite-food-rava-semolina-idly-rava-idly-75110197.jpg",
      title: "Small Idli",
      views: "24",
      date: "Mar 5, 2020",
    },
    ,
    {
      id: 6,
      image:
        "https://media.istockphoto.com/id/1083237342/photo/nariyal-or-coconut-chutney-served-in-a-bowl-isolated-over-moody-background-selective-focus.jpg?s=612x612&w=0&k=20&c=LT4pMo5RTCCraJIFlIKMXbiGxfW30Yr7BdpQhR1NxWI=",
      title: "Naariyal chutney",
      views: "22",
      date: "Mar 5, 2020",
    },
    {
      id: 5,
      image:
        "https://www.indianveggiedelight.com/wp-content/uploads/2020/06/onion-tomato-chutney-featured.jpg",
      title: "Tomato chutney",
      views: "24",
      date: "Mar 5, 2020",
    },
  ];

  const milkFoodData = [
    {
      id: 1,
      image:
        "https://as1.ftcdn.net/v2/jpg/05/12/16/76/1000_F_512167632_fMVY8XljRDTQJsRlsUQ442Mr1mnKXNDl.jpg",
      title: "Kelogg's chocos with milk",
      views: "2,465",
      date: "Jul 26, 2019",
    },
    {
      id: 2,
      image:
        "https://www.shutterstock.com/image-photo/corn-flakes-milk-splash-white-600nw-2149257935.jpg",
      title: "Corn flakes with milk",
      views: "3,210",
      date: "Aug 15, 2021",
    },
  ];

  const breadFoodData = [
    {
      id: 1,
      image:
        "https://img.freepik.com/premium-photo/sandwich-with-cheese-turkey-fresh-vegetables-white-background-side-view-close-up_166116-3646.jpg",
      title: "Sandwich",
      views: "23",
      date: "Jul 26, 2019",
    },
    {
      id: 2,
      image:
        "https://png.pngtree.com/png-clipart/20231001/original/pngtree-toasted-bread-with-strawberry-jam-png-image_13025175.png",
      title: "Break Jam",
      views: "3,210",
      date: "Aug 15, 2021",
    },
  ];

  return (
    <div>
      <CurrentFoodCard
        food={"Today's breakfast Here at stallion"}
        subtitle={
          "100% hygenic breakfast, includes south indian and north indian food items"
        }
        cardData={breakFastData}
      />

      <CurrentFoodCard
        food={"Milk products at stallion"}
        subtitle={"Regularly available"}
        cardData={milkFoodData}
      />

      <CurrentFoodCard
        food={"Bread items at stallion"}
        subtitle={"Regularly available"}
        cardData={breadFoodData}
      />
      <Cards
        food={"Regular breakfast at stallion"}
        subtitle={"Breakfast at stallion is the best"}
      />
    </div>
  );
}

export default Stallion;
