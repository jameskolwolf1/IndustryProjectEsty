import { motion, useMotionValue, useTransform } from "framer-motion";
import "./Cards.scss";
import Heart from '/Vector.svg'
function Cards({ name, id, url1, url2, url3, url4, setCard, color}) {
    const x_position = useMotionValue(0);
    const opacity = useTransform(x_position, [-20, 0, 20], [0, 1, 0]);
    const rotate = useTransform(x_position, [-1, 1], [-18, 18]);


  return (
    <motion.div
    className="motion"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x_position,
        opacity,
        rotate
      }}
      
      drag="x"
      dragConstraints={{

      }}
  
    >
      <div 
      style={{
        backgroundColor:color
      }}
      className="container">
      <div className="container_button">
            <button className="button">ETSY'S PICK</button>
          </div>
        <div className="container_holder">
          
          <div className="container1">
          <img className= "heart1" src={Heart}/>
            <img className="container_img" src={url1} />
          </div>
          <div className="container2">
            <img className= "heart2" src={Heart}/>
            <img className="container_img" src={url2} />
          </div>
          <div className="container3">
            <img className= "heart3" src={Heart}/>
            <img className="container_img" src={url3} />
          </div>
          <div className="container4">
          <img className= "heart4" src={Heart}/>
            <img className="container_img" src={url4} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Cards;
