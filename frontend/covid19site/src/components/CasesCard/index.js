import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

export default function CasesCard() {
  const casesConfirmed = useSelector((state) => state.data.totalCases);

  return (
    <div className="cardCases">
      <h4>Total de casos confirmados</h4>
      <h1>{casesConfirmed}</h1>
      <div className="line"></div>
    </div>
  );
}
