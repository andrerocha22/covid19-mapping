import React from "react";
import { useSelector } from "react-redux";

import "./styles.scss";
const abrevToName = {
  AC: " Acre ",
  AL: " Alagoas",
  AM: " Amazonas",
  BA: " Bahia",
  CE: " Ceará",
  GO: " Goiás",
  MA: " Maranhão",
  PA: " Pará",
  PE: " Pernambuco",
  PI: " Piauí",
  RO: " Rondônia",
  SE: " Sergipe",
  TO: " Tocantins",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  MG: "Minas Gerais",
  RJ: "Rio de Janeiro",
  SC: "Santa Catarina",
  SP: "São Paulo",
  MS: "Mato Grosso do Sul",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  AP: " Amapá",
  MT: "Mato Grosso",
  PB: " Paraíba",
  PR: " Paraná",
  RR: " Roraima",
};

export default function StatesList() {
  const stateList = useSelector((state) => state.data.listState);
  if (!stateList) {
    throw new Error("Data error");
  }

  const replaceStateName = (abrev) => {
    for (var key in abrevToName) {
      // let rg = new RegExp(key, "gi");
      if (abrev === key) return abrevToName[key];
    }
  };

  return (
    <div className="listContainer">
      <ul className="list">
        <li key="header" className="item">
          <h2>Estado</h2>
          <h2>Número de mortes</h2>
          <h2>Número de casos</h2>
        </li>
        {stateList.map((data) => (
          <li key={data.name} className="item">
            <h3>{replaceStateName(data.name)}</h3>
            <h1>{data.deaths}</h1>
            <h1>{data.confirmed}</h1>
            <a href="/">Mais detalhes</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
