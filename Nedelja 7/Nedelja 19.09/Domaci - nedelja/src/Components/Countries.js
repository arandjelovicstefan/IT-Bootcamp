import { Country } from "./Country";

const random = countries => {
   return countries.sort(() => Math.random() - Math.random()).slice(0, 15);
};

const Countries = countries => {
   return random(countries.map(country => Country(country)));
};

export { Countries };
