import { useState } from "react";
import { motion } from "framer-motion";
import "./GiftForm.scss";
import craftingIcon from "../../assets/icons/crafts_icon.png";
import outdoorsIcon from "../../assets/icons/outdoors_icon.png";
import petsIcon from "../../assets/icons/pets_icon.png";
import homeIcon from "../../assets/icons/home_icon.png";
import musicIcon from "../../assets/icons/music_icon.png";
import astrologyIcon from "../../assets/icons/astrology_icon.png";
import styleIcon from "../../assets/icons/style_icon.png";
import artIcon from "../../assets/icons/art_icon.png";
import foodIcon from "../../assets/icons/food_icon.png";
import drinksIcon from "../../assets/icons/drinks_icon.png";
import plantsIcon from "../../assets/icons/plants_icon.png";
import sportsIcon from "../../assets/icons/sports_icon.png";
import gamesIcon from "../../assets/icons/games_icon.png";
import peaceIcon from "../../assets/icons/peace_icon.png";
import travelIcon from "../../assets/icons/travel_icon.png";

const GiftForm = () => {
  const [activeRecipient, setActiveRecipient] = useState({});
  const [activeOccasion, setActiveOccasion] = useState({});
  const [activeHobbies, setActiveHobbies] = useState([]);
  const [activeTime, setActiveTime] = useState({});

  const toggleActive = (id, group) => {
    if (group === "recipient") {
      setActiveRecipient((current) => (current === id ? null : id));
    } else if (group === "occasion") {
      setActiveOccasion((current) => (current === id ? null : id));
    } else if (group === "time") {
      setActiveTime((current) => (current === id ? null : id));
    } else if (group === "hobby") {
      setActiveHobbies((currentHobbies) => {
        if (currentHobbies.includes(id)) {
          return currentHobbies.filter((hobbyId) => hobbyId !== id);
        } else {
          if (currentHobbies.length < 3) {
            return [...currentHobbies, id];
          }
        }
      });
    }
  };

  const renderHobby = (id, label, icon, color) => {
    const isActive = activeHobbies.includes(id);
    return (
      <div className="gift__hobby-input-container" key={id} onClick={(e) => {
        e.preventDefault();
        {
          toggleActive(id, "hobby");
        }
      }}>
        <label
          htmlFor={id}
          className={`gift__hobby-cta ${
            activeHobbies.includes(id) ? "active" : ""
          }`}
        >
          <div
            className="gift__hobby-icon-container"
            style={{ backgroundColor: color, backgroundImage: `url(${icon})` }}
          ></div>
          {label}
        </label>
        <input
          type="checkbox"
          className="gift__cta"
          id={id}
          name={id}
          checked={isActive}
          // onChange={() => {}}
        />
      </div>
    );
  };

  const renderInput = (id, label, group) => {
    let isActive;
    if (group === "recipient") {
      isActive = activeRecipient === id;
    } else if (group === "occasion") {
      isActive = activeOccasion === id;
    } else if (group === "time") {
      isActive = activeTime === id;
    }
    return (
      <div className="gift__input-container" key={id}>
        <label
          htmlFor={id}
          className={`gift__cta-input ${isActive ? "active" : ""}`}
          onClick={() => toggleActive(id, group)}
        >
          {label}
        </label>
        <input
          type="radio"
          className="gift__cta"
          id={id}
          name="giftOption"
          checked={isActive}
          onChange={() => {}}
        />
      </div>
    );
  };

  const recipientOptions = [
    { id: "friend", label: "Friend" },
    { id: "husband", label: "Husband" },
    { id: "wife", label: "Wife" },
    { id: "partner", label: "Partner" },
    { id: "mom", label: "Mom" },
    { id: "dad", label: "Dad" },
    { id: "arent", label: "Parent" },
    { id: "baby", label: "Baby" },
    { id: "boyfriend", label: "Boyfriend" },
    { id: "girlfriend", label: "Girlfriend" },
    { id: "myself", label: "Myself" },
    { id: "daughter", label: "Daughter" },
    { id: "son", label: "Son" },
    { id: "child", label: "Child" },
    { id: "grandchild", label: "Grandchild" },
    { id: "grandparent", label: "Grandparent" },
    { id: "brother", label: "Brother" },
    { id: "the_whole_family", label: "The Whole Family" },
    { id: "teacher", label: "Teacher" },
    { id: "coworker", label: "Coworker" },
    { id: "neighbor", label: "Neighbor" },
    { id: "someone_else", label: "Someone Else" },
  ];

  const occasionOptions = [
    { id: "birthday", label: "Birthday" },
    { id: "housewarming", label: "Housewarming" },
    { id: "justBecause", label: "Just Because" },
    { id: "wedding", label: "Wedding" },
    { id: "anniversary", label: "Anniversary" },
    { id: "thank_you", label: "Thank You" },
    { id: "graduation", label: "Graduation" },
    { id: "new_baby", label: "New Baby" },
    { id: "get_well_soon", label: "Get Well Soon" },
    { id: "valentines_day", label: "Valentine's Day" },
    { id: "mothers_day", label: "Mother's Day" },
    { id: "fathers_day", label: "Father's Day" },
  ];

  const timeOptions = [
    { id: "none", label: "No Time Limit" },
    { id: "three_days", label: "3 Days" },
    { id: "less_week", label: "Less Than a Week" },
    { id: "two_weeks", label: "2 Weeks" },
    { id: "one_month", label: "1 Month" },
  ];

  const hobbyOptions = [
    {
      id: "crafting",
      label: "Crafting & Creating",
      icon: craftingIcon,
      color: "#F19D27",
    },
    {
      id: "outdoors",
      label: "The Outdoors",
      icon: outdoorsIcon,
      color: "#FDD95C",
    },
    { id: "pets", label: "Their Pets", icon: petsIcon, color: "#F1641E" },
    { id: "music", label: "Music", icon: musicIcon, color: "#CCEBFF" },
    { id: "home", label: "The Perfect Home", icon: homeIcon, color: "#8C8AF0" },
    {
      id: "astrology",
      label: "Astrology",
      icon: astrologyIcon,
      color: "#21B55A",
    },
    {
      id: "style",
      label: "The Perfect Style",
      icon: styleIcon,
      color: "#8C8AF0",
    },
    { id: "art", label: "Arts & Culture", icon: artIcon, color: "#FDD95C" },
    { id: "food", label: "Great Food", icon: foodIcon, color: "#F1641E" },
    { id: "drinks", label: "Drinks", icon: drinksIcon, color: "#21B55A" },
    {
      id: "plants",
      label: "Plants & Animals",
      icon: plantsIcon,
      color: "#CCEBFF",
    },
    { id: "sports", label: "Sports", icon: sportsIcon, color: "#FDD95C" },
    { id: "games", label: "Games", icon: gamesIcon, color: "#F1641E" },
    { id: "peace", label: "Peace & Quiet", icon: peaceIcon, color: "#F19D27" },
    { id: "travel", label: "Travel", icon: travelIcon, color: "#8C8AF0" },
  ];

  return (
    <main className="gift">
      <div className="gift__header-container">
        <h1 className="gift__header-title">Find fantastic gifts in a flash!</h1>
        <p className="gift__header-subtitle">
          Tell us more about who you're shopping for and we'll match you with
          thoughtful gifts—just for them.
        </p>
      </div>
      <form className="gift__form">
        <div className="gift__recipient-container">
          <h2 className="gift__recipient-header">
            <span className="highlight">Who</span> are you shopping for?
          </h2>
          <div className="gift__recipient-cta-container">
            {recipientOptions.map((option) =>
              renderInput(option.id, option.label, "recipient")
            )}
          </div>
        </div>
        <div className="gift__occasion-container">
          <h2 className="gift__occasion-header">
            <span className="highlight">What's</span> the occasion?
          </h2>
          <div className="gift__occasion-cta-container">
            {occasionOptions.map((option) =>
              renderInput(option.id, option.label, "occasion")
            )}
          </div>
        </div>
        <div className="gift__time-container">
          <h2 className="gift__time-header">
            <span className="highlight">When</span> do you need it?
          </h2>
          <div className="gift__time-cta-container">
            {timeOptions.map((option) =>
              renderInput(option.id, option.label, "time")
            )}
          </div>
        </div>
        <div className="gift__hobby-container">
          <h2 className="gift__hobby-header">
            What are they <span className="highlight">into?</span>
          </h2>
          <h3 className="gift__hobby-subheader">
            Choose three or more for better suggestions
          </h3>
          <div className="gift__hobby-cta-container">
            {hobbyOptions.map((option) =>
              renderHobby(option.id, option.label, option.icon, "hobby")
            )}
          </div>
        </div>
        <div className="gift__submit-container">
          <motion.button
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="gift__submit-surprise"
          >
            Surprise Me
          </motion.button>
          <p>or</p>
          <button className="gift__submit-filter">Apply Filter</button>
        </div>
      </form>
    </main>
  );
};

export default GiftForm;
