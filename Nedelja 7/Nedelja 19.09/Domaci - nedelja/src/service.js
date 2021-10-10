import axios from "axios";

const BASE = "https://restcountries.eu/rest/v2";
const ALL = "/all";

const getAllCountries = () => axios.get(`${BASE}${ALL}`);

export { getAllCountries };
