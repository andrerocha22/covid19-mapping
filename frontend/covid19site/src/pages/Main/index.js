import React from 'react'
import DeathsCard from "../../components/DeathsCard";
import CasesCard from "../../components/CasesCard";
import StatesCasesTable from "../../components/StatesCasesTables";
import Charts from "../../components/Charts";

export default function Main() {
    return (
        <>
            <div className="row">
          <div className="col-6">
            <DeathsCard />
          </div>
          <div className="col-6">
            <CasesCard />
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
        </>
    )
}
