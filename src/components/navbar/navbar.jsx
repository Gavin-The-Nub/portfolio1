import "./navbar.scss";
import { motion } from "framer-motion";
import { Sidebar } from "../sidebar/Sidebar";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* para sa sidebar */}
      <Sidebar />
      <div className="wrapperNavbar">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="name">Ian Dev</p>
        </motion.span>
        <div className="social">
          <a className="social" href="#">
            <img src="/facebook.png" alt=""></img>
            <img src="/instagram.png" alt=""></img>
            <img src="/youtube.png" alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
};
