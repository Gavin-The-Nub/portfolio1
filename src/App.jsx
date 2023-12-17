import "./app.scss";
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/Hero/Hero";
import { Parallax } from "./components/Parallax/Parallax";
import { TechStack } from "./components/TechStack/TechStack";
import { createContext, useState } from "react";
import { Portfolio } from "./components/portfolio/portfolio";

{
  /*this is for us to get the theme value(dark || light) and we can use it in any css*/
}

export const ThemeContext = createContext();
const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {/* */}
      {console.log(theme)}
      <div id={theme}>
        <section id="Homepage">
          <Navbar />
          <Hero />
        </section>
        <section id="Tech Stack">
          <Parallax type="tech" />
        </section>
        <section>
          <TechStack />
        </section>
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <section>
          <Portfolio />
        </section>
        <section>work2</section>
        <section>work3</section>
        <section id="Contact">contact</section>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
