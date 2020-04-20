import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadDataState } from "../../actions/index";

import "./styles.scss";

export default function CitiesCasesTable(props) {
  const citiesList = useSelector((state) => state.dataState.listCities);
  const status = useSelector((state) => state.dataState.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataState(props.state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!citiesList && status === "received") {
    throw new Error("Data error");
  }

  const printTableWithCities = () => {
    if (status === "waiting") {
      return (
        <div>
          <h1>Carregando...</h1>
        </div>
      );
    } else if (status === "received") {
      return (
        <div className="tableCitiesContainer">
          <table>
            <thead>
              <tr>
                <th>Estado</th>
                <th>Confirmados</th>
                <th>Mortes</th>
              </tr>
            </thead>
            <tbody>
              {citiesList.map((data) => (
                <tr key={data.name} className="item">
                  <td className="stateName">{data.name}</td>
                  <td className="stateConfirmeds">{data.confirmed}</td>
                  <td className="stateDeaths">{data.deaths}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return <div className="tableContainer">{printTableWithCities()}</div>;
}
