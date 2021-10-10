import { Country, singleCountry } from "./Country";

const Countries = countries => {
   return countries.map(country => Country(country));
};

const OneCountry = countries => {
   return countries.map(country => singleCountry(country));
};

export { Countries, OneCountry };
