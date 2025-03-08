import React, { useEffect, useState } from "react";
import { getCoinList } from "../services/cryptoApi";
import TableCoins from "../modules/TableCoins";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
    };
  }, []);
  return (
    <div>
      <TableCoins coins={coins} />
    </div>
  );
};

export default HomePage;
