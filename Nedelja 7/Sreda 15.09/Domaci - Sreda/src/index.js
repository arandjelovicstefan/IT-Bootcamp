// ## Апликација за приказ информација о државама

// https://restcountries.eu/

// 1. Приказују се све државе (основне информације)
//     - Застава
//     - Име државе
// 2. Постоји Select за бирање региона
// 3. Постоји Input за претрагу држава
// 4. Ако је на страници само једна држава, приказати додатне информације о њој
//     - Застава
//     - Име државе
//     - Име државе на матерњем језику
//     - Популација
//     - Главни град
//     - Интернет домен

// Додатно:
// 5. На страници се приказује највише 7 држава
//     - За остале се праве додатне странице (испод приказа)

import axios from "axios";
import { main, searchInput, selectDiv } from "./Components/Constants";
import { Countries, OneCountry } from "./Components/Countries";
import { Select } from "./Components/Select";
import { getAllCountries } from "./service";

let countries = [];

getAllCountries().then(response => {
   countries = response.data;
   Countries(countries);
   main.append(...Countries(countries));
   Select(countries);
   console.log(countries);
});

searchInput.addEventListener("input", () => {
   main.innerHTML = "";
   let filter = countries.filter(launch => launch.name.toLowerCase().includes(searchInput.value));
   main.append(...Countries(filter));
   if (filter.length == 1) {
      main.innerHTML = "";
      OneCountry(filter);
      main.append(...OneCountry(filter));
   }
});
