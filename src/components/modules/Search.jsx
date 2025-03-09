import { useEffect, useState } from "react";
import { searchCoins } from "../services/cryptoApi";
import SyncLoader from "react-spinners/SyncLoader";
import styles from "./Search.module.css";

const Search = ({ setCurrency, currency }) => {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoadng, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);
    if (!text) {
      setIsLoading(false);
      return;
    } // if text is empty, return

    const search = async () => {
      try {
        const res = await fetch(searchCoins(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setCoins(json.coins);
          setIsLoading(false);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortErorr") {
          alert(error.message);
        }
      }
    };
    setIsLoading(true);
    search();
    return () => controller.abort();
  }, [text]);
  return (
    <div className={styles.searchBox}>
      <input
        type="search"
        name="search"
        value={text}
        placeholder="Search"
        onChange={(event) => setText(event.target.value)}
      />
      <select
        name="select"
        value={currency}
        onChange={(event) => setCurrency(event.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {(!!coins.length || isLoadng) && (
        <div className={styles.searchResult}>
          {isLoadng && <SyncLoader size="10px" color="#3874ff" />}
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                <img src={coin.thumb} alt={coin.name} />
                <p>{coin.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
