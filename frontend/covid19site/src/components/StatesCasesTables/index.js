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

export default function StatesCasesTable() {
  const stateList = useSelector((state) => state.data.listState);
  const aux = useSelector((state) => state.dataTochart.dates);
  // console.log(aux);
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
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Estado</th>
            <th>Confirmados</th>
            <th>Mortes</th>
            <th>Taxa de Mortalidade</th>
          </tr>
        </thead>
        <tbody>
          {stateList.map((data) => (
            <tr key={data.name} className="item">
              <td>{replaceStateName(data.name)}</td>
              <td>{data.deaths}</td>
              <td>{data.confirmed}</td>
              <td>{Math.round(data.death_rate * 100)}%</td>
              <td>
                <a href="/">Ver cidades</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
