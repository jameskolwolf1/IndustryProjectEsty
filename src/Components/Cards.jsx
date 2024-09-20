import { motion, useMotionValue, useTransform } from "framer-motion";
import "./Cards.scss";
function Cards({ name, id, url1, url2, url3, url4, setCard}) {
    const x_position = useMotionValue(0);
    const opacity = useTransform(x_position, [-5, 0, 5], [0, 1, 0]);
    const rotate = useTransform(x_position, [-1, 1], [-18, 18]);

    const handler = () => {

        if(Math.abs(x_position.get())){

            setCard((pv) => pv.filter((v) => v.id !== id));
        }
    }

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
      animate={{ rotate: 360 }}
      transition={{ease: "linear", duration: .5, type: "spring", stiffness: 200, damping: 10, x: { duration: 1 }
    }}
      drag="x"
      dragConstraints={{

      }}
      onDragEnd={handler}
    >
      <div className="container">
      <div className="container_button">
            <button className="button">ETSY'S PICK</button>
          </div>
        <div className="container_holder">
          
          <div className="container1">
            <img className="container_img" src={url1} />
          </div>
          <div className="container2">
            <img className="container_img" src={url2} />
          </div>
          <div className="container3">
            <img className="container_img" src={url3} />
          </div>
          <div className="container4">
            <img className="container_img" src={url4} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Cards;
