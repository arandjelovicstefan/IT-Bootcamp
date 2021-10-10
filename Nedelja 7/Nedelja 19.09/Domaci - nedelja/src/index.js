import axios from "axios";
import { main } from "./Components/Constants";
import { Countries } from "./Components/Countries";
import { getAllCountries } from "./service";

let countries = [];

getAllCountries().then(response => {
   countries = response.data;
   main.append(...Countries(countries));
   console.log(countries[0]);
});

export { countries };
