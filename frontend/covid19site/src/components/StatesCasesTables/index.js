import React from "react";
import { useSelector } from "react-redux";

import "./styles.scss";
import { Link } from "react-router-dom";
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

  if (!stateList) {
    throw new Error("Data error");
  }

  const replaceStateName = (abrev) => {
    for (var key in abrevToName) {
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
            <th className="stateDeathRateHeader">Taxa de Mortalidade</th>
          </tr>
        </thead>
        <tbody>
          {stateList.map((data) => (
            <tr key={data.name} className="item">
              <td className="stateName">
                <Link
                  to={`/estado/${data.name.toLowerCase()}`}
                >
                  {replaceStateName(data.name)}
                </Link>
              </td>
              <td className="stateDeaths">{data.deaths}</td>
              <td className="stateConfirmeds">{data.confirmed}</td>
              <td className="stateDeathRate">
                {Math.round(data.death_rate * 100)}%
              </td>
              <td className="stateMoreInfo">
                <Link
                  className="buttonSeeMore"
                  to={`/estado/${data.name.toLowerCase()}`}
                >
                  Ver cidades
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
