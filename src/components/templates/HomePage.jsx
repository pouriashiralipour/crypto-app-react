import React, { useEffect, useState } from "react";
import { getCoinList } from "../services/cryptoApi";
import TableCoins from "../modules/TableCoins";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(getCoinList(page, currency));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, [page, currency]);
  return (
    <div>
      <Search setCurrency={setCurrency} currency={currency} />
      <TableCoins coins={coins} isLoading={isLoading} currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
