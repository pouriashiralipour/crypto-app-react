import SyncLoader from "react-spinners/SyncLoader";
import TableRow from "./TableRow";

const TableCoins = ({ coins, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <SyncLoader color="#3874ff" />
      ) : (
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
      )}
    </div>
  );
};

export default TableCoins;
