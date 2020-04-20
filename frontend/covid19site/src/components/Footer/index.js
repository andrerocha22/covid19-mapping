import React from "react";
import coffeMug from "../../assets/images/food.svg";
import github from "../../assets/images/GitHub.png";
import "./styles.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="text">
        Feito com <img src={coffeMug} alt="coffe" />
      </div>
      <div className="text">
        <a href="https://github.com/andrerocha22/covid19-mapping">
          GitHub
          <img src={github} alt="gitIcon" />
        </a>
      </div>
    </div>
  );
}
