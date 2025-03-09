const BASE_URL = "https://api.coingecko.com/api/v3/";
const API_KEY = "CG-NAgBbqjum7yU19PUkH81vFLT";

const getCoinList = (page, currency) =>
  `${BASE_URL}coins/markets?vs_currency=${currency}&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;
const searchCoins = (query) =>
  `${BASE_URL}search?query=${query}&x_cg_demo_api_key=${API_KEY}`;

export { getCoinList, searchCoins };
