import React from "react";
import DeathsCard from "../../components/DeathsCard";
import CasesCard from "../../components/CasesCard";
import StatesCasesTable from "../../components/StatesCasesTables";
import Charts from "../../components/Charts";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

export default function Main() {
  const casesConfirmed = useSelector((state) => state.data.totalCases);
  const deaths = useSelector((state) => state.data.totalDeaths);

  return (
    <>
      <Header />
      <div className="content">
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
            <h3>Casos confirmados de Covid19 no Brasil</h3>
            <Charts />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>Casos confirmados de Covid19 em cada estado</h3>
            <StatesCasesTable />
          </div>
        </div>
      </div>
    </>
  );
}
