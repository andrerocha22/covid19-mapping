import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

export default function DeathsCard() {
  const deaths = useSelector((state) => state.data.totalDeaths);

  return (
    <div className="cardDeaths">
      <h4>Total de mortes confirmadas</h4>
      <h1>{deaths}</h1>
      <div className="line"></div>
    </div>
  );
}
