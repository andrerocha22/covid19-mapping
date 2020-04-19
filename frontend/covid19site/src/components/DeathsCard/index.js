import React from "react";
import "./styles.scss";

export default function DeathsCard(props) {
  return (
    <div className="cardDeaths">
      <h4>Total de mortes confirmadas</h4>
      <h1>{props.number}</h1>
      <div className="line"></div>
    </div>
  );
}
