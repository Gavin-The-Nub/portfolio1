import "./TechStack.scss";
import { useState } from "react";

export const TechStack = () => {
  //const [neon, setNeon] = useState(false);

  return (
    <div className="parent">
      <div className="btn">
        {/*<label class="switch btn">
          <input
            type="checkbox"
            onClick={() => setNeon((prev) => !prev)}
          ></input>
          <span class="slider"></span>
        </label>
*/}
        {/*console.log(neon)*/}
      </div>
      <div
        className="wrapperTechStack"
        // style={{
        // boxShadow: neon ? "0px 0px 95px 22px rgba(255,66,223,1)" : "none",
        //  }}
      >
        <div
          className="card"
          // style={{
          //   boxShadow: neon ? "0px 0px 24px 9px rgba(255,66,223,1)" : "none",
          // }}
        >
          <img src="/html.png"></img>
          <div className="info">
            <h1>HTML</h1>
          </div>
        </div>
        <div
          className="card"
          // style={{
          //   boxShadow: neon ? "0px 0px 24px 9px rgba(255,66,223,1)" : "none",
          // }}
        >
          <img src="/css.png"></img>
          <div className="info">
            <h1>CSS</h1>
          </div>
        </div>
        <div
          className="card"
          // style={{
          //   boxShadow: neon ? "0px 0px 24px 9px rgba(255,66,223,1)" : "none",
          // }}
        >
          <img src="/javascript.png"></img>
          <div className="info">
            <h1>JAVASCRIPT</h1>
          </div>
        </div>
        <div
          className="card"
          // style={{
          //   boxShadow: neon ? "0px 0px 24px 9px rgba(255,66,223,1)" : "none",
          // }}
        >
          <img src="/reactJs.png"></img>
          <div className="info">
            <h1>REACT JS</h1>
          </div>
        </div>
        <div
          className="card"
          // style={{
          //   boxShadow: neon ? "0px 0px 24px 9px rgba(255,66,223,1)" : "none",
          // }}
        >
          <img src="/firebase.png"></img>
          <div className="info">
            <h1>FIREBASE</h1>
          </div>
        </div>
        <div
          className="card"
          // style={{
          //   boxShadow: neon ? "0px 0px 24px 9px rgba(255,66,223,1)" : "none",
          // }}
        >
          <img src="/typescript.png"></img>
          <div className="info">
            <h1>TYPESCRIPT</h1>
          </div>
        </div>
        <div
          className="card"
          // style={{
          //   boxShadow: neon ? "0px 0px 24px 9px rgba(255,66,223,1)" : "none",
          // }}
        >
          <img src="/sass.png"></img>
          <div className="info">
            <h1>SASS</h1>
          </div>
        </div>
        <div
          className="card"
          // style={{
          //   boxShadow: neon ? "0px 0px 24px 9px rgba(255,66,223,1)" : "none",
          // }}
        >
          <img src="/tailwind.png"></img>
          <div className="info">
            <h1>TAILWIND CSS</h1>
          </div>
        </div>
        <div
          className="card"
          // style={{
          //   boxShadow: neon ? "0px 0px 24px 9px rgba(255,66,223,1)" : "none",
          // }}
        >
          <img src="/shadcn.png"></img>
          <div className="info">
            <h1>SHADCN</h1>
          </div>
        </div>
        <div
          className="card"
          // style={{
          //   boxShadow: neon ? "0px 0px 24px 9px rgba(255,66,223,1)" : "none",
          // }}
        >
          <img src="/viteJs.png"></img>
          <div className="info">
            <h1>VITE JS</h1>
          </div>
        </div>
        <div
          className="card"
          // style={{
          //   boxShadow: neon ? "0px 0px 24px 9px rgba(255,66,223,1)" : "none",
          // }}
        >
          <img src="/nextJs.png"></img>
          <div className="info">
            <h1>NEXT JS</h1>
          </div>
        </div>
        <div
          className="card"
          // style={{
          //   boxShadow: neon ? "0px 0px 24px 9px rgba(255,66,223,1)" : "none",
          // }}
        >
          <img src="/framerMotion.png"></img>
          <div className="info">
            <h1>FRAMER MOTION</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
