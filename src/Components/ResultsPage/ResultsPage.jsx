import React, { useState } from "react";
import Cards from "../Cards";
import "./RessultsPage.scss";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import exitsLogo from "/close_ring.svg";
import HandIcon from "/Hand.svg";
import LeftArrow from "/BrianaArrow.svg";
import SwapIcon from "/Arrow_Swipe.svg";


function ResultsPage() {
  const cardList = [
    {
      id: 1,
      name: "Esty'S Pick",
      url1: "/EatsyPICK1.svg",
      url2: "/EatsyPICK2.svg",
      url3: "/EatsyPICK3.svg",
      url4: "/EatsyPICK4.svg",
      color: '#C1E9FF'

    },
    {
      id: 2,
      name: "Fancy",
      url1: "/Fancy1.svg",
      url2: "/Fancy2.svg",
      url3: "/Fancy3.svg",
      url4: "/Fancy4.svg",
      color: "#8c8af0"
    },
    {
      id: 3,
      name: "Most Loved",
      url1: "/MostLove1.svg",
      url2: "/MostLove2.svg",
      url3: "/MostLove3.svg",
      url4: "/MostLove14.svg",
      color: "#fdd95c"
    },
    {
      id: 4,
      name: "Today's Deals",
      url1: "/TodayDeals1.png",
      url2: "/TodayDeals2.png",
      url3: "/TodayDeals3.png",
      url4: "/TodayDeals4.png" ,
      color: "#a0e193"
    },
    {
      id: 5,
      name: "Quirky",
      url1: "/quirky1.svg",
      url2: "/Quirky2.svg",
      url3: "/Quirky3.svg",
      url4: "/Quirky4.svg",
      color: "#35b064"
    },
  ];
  const [card, setCard] = useState(cardList);

  return (
    <>
      <div className="header_container">
        <Header />
      </div>

      <section className="section">
        <div className="exits"></div>
        <div className="test">
          {cardList.map((card) => (
            <Cards key={card.id} card={card} setCard={setCard} {...card} />
          )).reverse()}
        </div>
        <div className="bottom">
          <div className="bottom_One">
            <img src={SwapIcon} />
            <img src={HandIcon} />
          </div>
          <div>
            <img src={LeftArrow} />
          </div>
        </div>
      </section>
    </>
  );
}
export default ResultsPage;
