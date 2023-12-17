import "./Portfolio.scss";

export const Portfolio = () => {
  return (
    <div className="proj">
      <div className="cardProject">
        <div className="card1">
          <div className="cardImg1"></div>
          <a
            href="https://gavin-the-nub.github.io/calculatorWannaBe/"
            className="linkCard1"
          >
            <img src="/goto.png" className="goto1"></img>
          </a>
          <div className="useTech">
            <img src="html.png"></img>
            <img src="css.png"></img>
            <p className="projText">Youtube Clone</p>
          </div>
        </div>
        <div className="card2">
          <div className="cardImg2"></div>
          <a
            href="https://gavin-the-nub.github.io/calculatorWannaBe/"
            className="linkCard2"
          >
            <img src="/goto.png" className="goto2"></img>
          </a>
          <div className="useTech">
            <img src="html.png"></img>
            <img src="css.png"></img>
            <p className="projText">Frozen Meat Trading</p>
          </div>
        </div>
      </div>
    </div>
  );
};
