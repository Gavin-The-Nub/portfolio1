import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useRef } from "react";

//({ type }) this gets the type we put from the app.jsx
export const Parallax = ({ type }) => {
  //I used useRef to get whats inside of the div
  const ref = useRef();

  //this sets what section were gonna use useScroll
  const { scrollYProgress } = useScroll({
    target: ref,

    //this means start is on start of viewpoint
    //end is in the start of viewpoint
    offset: ["start start", "end start"],
  });

  //0-1 is 0-100
  //["0%", "100%"] example 0.10 == 10%, 0.50 == 50%
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const planet = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const planet2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "tech"
            ? " linear-gradient(180deg, rgba(0,7,47,1) 31%, rgba(70,78,212,1) 79%, rgba(97,150,255,1) 95%, rgba(0,232,255,1) 100%)"
            : "linear-gradient(34deg, rgba(41,122,187,1) 13%, rgba(5,11,31,1) 32%, rgba(0,46,194,1) 53%, rgba(0,4,6,1) 67%, rgba(41,115,187,1) 80%, rgba(41,122,187,1) 83%, rgba(0,0,0,1) 92%)",
      }}
    >
      <motion.h1
        style={{ y: yText, color: type === "tech" ? "white" : "#F0ECE5" }}
      >
        {type === "tech" ? "What I use" : "What I did"}
      </motion.h1>
      <motion.div className="mountain"></motion.div>
      <motion.div
        style={{
          y: planet,
          x: planet2,
          backgroundImage: `url(${
            type === "tech" ? "/planets.png" : "/sun1.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div
        style={{
          x: yBg,
          backgroundImage: `url(${
            type === "tech" ? "/stars.png" : "/stars.png"
          })`,
          zIndex: type === "tech" ? "1" : "2",
        }}
        className="stars"
      ></motion.div>
    </div>
  );
};
