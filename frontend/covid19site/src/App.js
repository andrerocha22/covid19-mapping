import React from "react";
import Header from "./components/Header";
import "./assets/styles/app.scss";
import DeathsCard from "./components/DeathsCard";
import CasesCard from "./components/CasesCard";
import StatesList from "./components/StatesList";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <section className="cardsSection">
          <DeathsCard />
          <CasesCard />
        </section>
        <section className="statesListSection">
          <StatesList />
        </section>
      </div>
    </div>
  );
}

export default App;
