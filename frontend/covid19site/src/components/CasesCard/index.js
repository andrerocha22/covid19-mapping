import React from "react";
import "./styles.scss";

export default function CasesCard(props) {

  return (
    <div className="cardCases">
      <h4>Total de casos confirmados</h4>
      <h1>{props.number}</h1>
      <div className="line"></div>
    </div>
  );
}
