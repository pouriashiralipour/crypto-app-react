import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { converData } from "../../helpers/convertData";
import styles from "./Chart.module.css";

const Chart = ({ chart, setChart }) => {
  const [type, setType] = useState("prices");
  const typeHanddler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };
  console.log(converData(chart, type));
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        ✘
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} alt={chart.coin.name} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={converData(chart, type)} type={type} />
        </div>
        <div className={styles.types} onClick={typeHanddler}>
          <button className={type === "prices" ? styles.selected : null}>
            Prices
          </button>
          <button className={type === "market_caps" ? styles.selected : null}>
            Market Caps
          </button>
          <button className={type === "total_volumes" ? styles.selected : null}>
            Total Volumes
          </button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Prices:</p>
            <sapn>${chart.coin.current_price.toLocaleString()}</sapn>
          </div>
          <div>
            <p>ATH:</p>
            <sapn>${chart.coin.ath.toLocaleString()}</sapn>
          </div>
          <div>
            <p>Market Cap:</p>
            <sapn>{chart.coin.market_cap.toLocaleString()}</sapn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#404042" />
      </LineChart>
    </ResponsiveContainer>
  );
};
