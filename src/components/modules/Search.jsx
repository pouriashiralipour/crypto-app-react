const Search = ({ setCurrency, currency }) => {
  return (
    <div>
      <input type="search" name="search" />
      <select
        name="select"
        value={currency}
        onChange={(event) => setCurrency(event.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
};

export default Search;
