import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import moment from "moment";

import "./styles.scss";

export default function Charts() {
  const dataReceived = useSelector((state) => state.dataTochart.dates);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataReceived);
  }, [dataReceived]);

  function formatXAxis(tickItem) {
    return moment(tickItem).format("DD/MMM/YYYY");
  }

  return (
    <div className="chart">
      {console.log(data)}

      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis
            dataKey="Dia"
            tickFormatter={formatXAxis}
            domain={["dataMin", "dataMax"]}
          />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Confirmados"
            stackId="1"
            fillOpacity={1}
            stroke="#3bce3e"
            fill="#3bce3e"
          />
          <Area
            type="monotone"
            dataKey="Mortes"
            stackId="2"
            fillOpacity={1}
            stroke="#b72626"
            fill="#b72626"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
