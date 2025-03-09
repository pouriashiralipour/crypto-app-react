import chartDown from "../../assets/chart-down.svg";
import chartUp from "../../assets/chart-up.svg";

const TableRow = ({
  coin: {
    id,
    coin,
    name,
    symbol,
    image,
    current_price,
    total_volume,
    price_change_percentage_24h,
  },
}) => {
  return (
    <div>
      <tr>
        <td>
          <div>
            <img src={image} alt={name} />
            <span>{symbol.toUpperCase()}</span>
          </div>
        </td>
        <td>{name}</td>
        <td>{current_price.toLocaleString()}</td>
        <td>{price_change_percentage_24h}</td>
        <td>{total_volume.toLocaleString()}</td>
        <td>
          <img
            src={price_change_percentage_24h > 0 ? chartUp : chartDown}
            alt={name}
          />
        </td>
      </tr>
    </div>
  );
};

export default TableRow;
