import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import Cards from "../Cards";
import "./RessultsPage.scss";
import { motion } from "framer-motion";

function ResultsPage() {
  const cardList = [

    { id: 1, 
        name: "Card 1", 
        url1: "https://www.winthorpe.com/wp-content/uploads/2022/08/heidi-fin-2tlrezi7bug-unsplash.jpg",
        url2: "https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png",
        url3: "https://www.investopedia.com/thmb/kVxMl1DFogJNwnjMJv6zNxmuU6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-618432992-a6784667528e4771bf8a69477a149d05.jpg",
        url4: "https://media.wired.com/photos/5c9040ee4950d24718d6da99/1:1/w_1800,h_1800,c_limit/shoppingcart-1066110386.jpg",
    },
    { id: 2, 
        name: "Card 1", 
        url1: "https://www.winthorpe.com/wp-content/uploads/2022/08/heidi-fin-2tlrezi7bug-unsplash.jpg",
        url2: "https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png",
        url3: "https://www.investopedia.com/thmb/kVxMl1DFogJNwnjMJv6zNxmuU6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-618432992-a6784667528e4771bf8a69477a149d05.jpg",
        url4: "https://media.wired.com/photos/5c9040ee4950d24718d6da99/1:1/w_1800,h_1800,c_limit/shoppingcart-1066110386.jpg",
    },
    { id: 3, 
        name: "Card 1", 
        url1: "https://www.winthorpe.com/wp-content/uploads/2022/08/heidi-fin-2tlrezi7bug-unsplash.jpg",
        url2: "https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png",
        url3: "https://www.investopedia.com/thmb/kVxMl1DFogJNwnjMJv6zNxmuU6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-618432992-a6784667528e4771bf8a69477a149d05.jpg",
        url4: "https://media.wired.com/photos/5c9040ee4950d24718d6da99/1:1/w_1800,h_1800,c_limit/shoppingcart-1066110386.jpg",
    },
    { id: 4, 
        name: "Card 1", 
        url1: "https://www.winthorpe.com/wp-content/uploads/2022/08/heidi-fin-2tlrezi7bug-unsplash.jpg",
        url2: "https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png",
        url3: "https://www.investopedia.com/thmb/kVxMl1DFogJNwnjMJv6zNxmuU6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-618432992-a6784667528e4771bf8a69477a149d05.jpg",
        url4: "https://media.wired.com/photos/5c9040ee4950d24718d6da99/1:1/w_1800,h_1800,c_limit/shoppingcart-1066110386.jpg",
    },

    
    
  ];
  const [card, setCard] = useState(cardList);

  return (
    <section>
        <div>
            <button></button>
            <button></button>
        </div>
      <div className="test">
        {cardList.map(card => <Cards key={card.id} 
        card={card}
        setCard={setCard}
        {...card}/>)}
      </div>
    </section>
  );
}
export default ResultsPage;
