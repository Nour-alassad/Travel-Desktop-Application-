import React, { useEffect } from "react";
import "./main.css";
// import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
// import images
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import img4 from "../../Images/img4.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "HISTORICAL TREASURES",
    fees: "$500",
    description:
      "A 15th-century Inca citadel set high in the Andes Mountains, Machu Picchu is renowned for its archaeological significance and breathtaking views.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Eiffel Tower",
    location: "Paris, France",
    grade: "CULTURAL ICON",
    fees: "$25",
    description:
      "The Eiffel Tower is one of the most iconic structures in the world, offering stunning views of Paris and a glimpse into French culture.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Santorini",
    location: "Greece",
    grade: "BEACH PARADISE",
    fees: "$600",
    description:
      "Famous for its whitewashed buildings and stunning sunsets, Santorini is the perfect getaway for lovers and adventurers alike.",
  },
  {
    id: 5,
    imgSrc: img1,
    destTitle: "Great Wall of China",
    location: "China",
    grade: "HISTORICAL SIGHT",
    fees: "$30",
    description:
      "An ancient series of walls and fortifications, the Great Wall of China is a UNESCO World Heritage site and a testament to human engineering.",
  },
  {
    id: 6,
    imgSrc: img2,
    destTitle: "Grand Canyon",
    location: "Arizona, USA",
    grade: "NATURAL WONDER",
    fees: "$35",
    description:
      "The Grand Canyon is a steep-sided canyon carved by the Colorado River, known for its overwhelming size and its intricate and colorful landscape.",
  },
  {
    id: 7,
    imgSrc: img3,
    destTitle: "Tokyo",
    location: "Japan",
    grade: "MODERN CULTURE",
    fees: "$400",
    description:
      "Tokyo is a bustling metropolis that blends traditional culture with modern architecture, known for its cuisine, fashion, and technology.",
  },
  {
    id: 8,
    imgSrc: img4,
    destTitle: "Sydney Opera House",
    location: "Australia",
    grade: "ARCHITECTURAL MARVEL",
    fees: "$45",
    description:
      "The Sydney Opera House is an iconic symbol of Australia, famous for its unique design and vibrant performing arts scene.",
  },
  {
    id: 9,
    imgSrc: img1,
    destTitle: "Disneyland",
    location: "California, USA",
    grade: "FAMILY FUN",
    fees: "$150",
    description:
      "Disneyland is known as the happiest place on earth, filled with rides, attractions, and entertainment for the whole family.",
  },
  {
    id: 10,
    imgSrc: img2,
    destTitle: "Safari in Serengeti",
    location: "Tanzania",
    grade: "WILDLIFE ADVENTURE",
    fees: "$1200",
    description:
      "Experience the thrill of wildlife safaris in the Serengeti National Park, known for its incredible biodiversity and the Great Migration.",
  },
  {
    id: 11,
    imgSrc: img3,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 12,
    imgSrc: img1,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "HISTORICAL TREASURES",
    fees: "$500",
    description:
      "A 15th-century Inca citadel set high in the Andes Mountains, Machu Picchu is renowned for its archaeological significance and breathtaking views.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees felx">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                    <LuClipboardCheck />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
