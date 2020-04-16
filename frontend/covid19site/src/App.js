import React from "react";
import Header from "./components/Header";
import "./assets/styles/app.scss";

import Routes from "./routes";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
