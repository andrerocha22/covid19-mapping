import React from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CitiesCasesTable from "../../components/CitiesCasesTables";
import DeathsCard from "../../components/DeathsCard";
import CasesCard from "../../components/CasesCard";

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

const replaceStateName = (abrev) => {
  for (var key in abrevToName) {
    // let rg = new RegExp(key, "gi");
    if (abrev === key) return abrevToName[key];
  }
};

export default function ChoosedState() {
  const casesConfirmed = useSelector((state) => state.dataState.totalCases);
  const deaths = useSelector((state) => state.dataState.totalDeaths);
  const params = useParams();
  return (
    <>
      <Header />
      <div className="content">
        <h1>{replaceStateName(params.id.toUpperCase())}</h1>
        <div className="row">
          <div className="col-6">
            <DeathsCard number={deaths} />
          </div>
          <div className="col-6">
            <CasesCard number={casesConfirmed} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>Casos confirmados de Covid19 por cada cidade</h3>
            <CitiesCasesTable state={params.id.toUpperCase()} />
          </div>
        </div>
      </div>
    </>
  );
}
