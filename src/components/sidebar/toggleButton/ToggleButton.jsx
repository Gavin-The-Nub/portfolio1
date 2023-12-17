import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

motion;

export const ToggleButton = ({ setOpen }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  //used to set setOpen value to the opposite
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke={theme === "dark" ? "black" : "white"}
          strokeLineCap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        ></motion.path>
        <motion.path
          strokeWidth="3"
          stroke={theme === "dark" ? "black" : "white"}
          strokeLineCap="round"
          d="M 2 9.5 L 20 9.5"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        ></motion.path>
        <motion.path
          strokeWidth="3"
          stroke={theme === "dark" ? "black" : "white"}
          strokeLineCap="round"
          variants={{
            closed: { d: "M 2 16.5 L 20 16.5" },
            open: { d: "M 3 2.5 L 17 16.5" },
          }}
        ></motion.path>
      </svg>
    </button>
  );
};
