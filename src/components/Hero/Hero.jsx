import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
//for the slider text
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-1300%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 40,
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="wrapperHero"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="textContainer" variants={textVariants}>
          <motion.h2 variants={textVariants}>Ian Lodor</motion.h2>
          <motion.h1 variants={textVariants}>
            Front End <br />
            Web Developer
          </motion.h1>
          <motion.div className="button" variants={textVariants}>
            <motion.button className="btn" variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button className="btn" variants={textVariants}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Senior High School Student x Front End Web Developer
      </motion.div>

      <div className="imageContainer">
        <img src="/GoodShrekImageNew.png  " alt="" />
      </div>
    </div>
  );
};
