import React from "react";
import TableRow from "./TableRow";

const TableCoins = ({ coins }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
            <th></th>
          </tr>
          {coins.map((coin) => (
            <TableRow key={coin.id} coin={coin} />
          ))}
        </thead>
      </table>
    </div>
  );
};

export default TableCoins;
