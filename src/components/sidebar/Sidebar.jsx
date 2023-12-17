import { useState } from "react";
import { Links } from "./Links/Links";
import { ToggleButton } from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";
import "./sidebar.scss";

const variants = {
  //this will not overflow since we only put 400px on the parent
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      duration: 0.8,
    },
  },
};

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    //if open is true then the child(bg...) will use open and viceversa
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
