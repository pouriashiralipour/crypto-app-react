import SyncLoader from "react-spinners/SyncLoader";

import styles from "./TableCoins.module.css";

import chartDown from "../../assets/chart-down.svg";
import chartUp from "../../assets/chart-up.svg";
import { marketChart } from "../services/cryptoApi";

const TableCoins = ({ coins, isLoading, currency, setChart }) => {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <SyncLoader color="#3874ff" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                key={coin.id}
                coin={coin}
                currency={currency}
                setChart={setChart}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableCoins;

const TableRow = ({ coin, currency, setChart }) => {
  const {
    id,
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h,
  } = coin;
  const showModalHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      setChart({ ...json, coin: coin });
    } catch (error) {
      setChart(null);
    }
  };
  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showModalHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      {currency === "usd" ? (
        <td>${current_price.toLocaleString()}</td>
      ) : currency === "eur" ? (
        <td>€{current_price.toLocaleString()}</td>
      ) : (
        <td>¥{current_price.toLocaleString()}</td>
      )}
      <td
        className={
          price_change_percentage_24h > 0 ? styles.success : styles.error
        }
      >
        {price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img
          src={price_change_percentage_24h > 0 ? chartUp : chartDown}
          alt={name}
        />
      </td>
    </tr>
  );
};
