import { countries } from "..";
import { getAllCountries } from "../service";
import { Buttons } from "./Buttons";
import { divApp, main } from "./Constants";
import { Countries } from "./Countries";

const Country = country => {
   const divCountry = document.createElement("div");
   const p = document.createElement("p");
   p.innerHTML = `
   <span>Name: ${country.name}</span><br>
   <span>Capital: ${country.capital}</span><br>`;

   const img = document.createElement("img");
   img.src = country.flag;
   img.alt = `Flag of ${country.name}`;

   img.addEventListener("click", () => {
      main.innerHTML = "";
      main.append(SingleCountry(country));
      Buttons(country);
   });

   divCountry.append(p, img);
   return divCountry;
};

const SingleCountry = country => {
   const divCountry = document.createElement("div");
   const p = document.createElement("p");
   p.innerHTML = `<span>Name: ${country.name}</span><br>
   <span>Capital: ${country.capital}</span><br>
   <span>Population: ${country.population}</span><br>
   <span>Timezone: ${country.timezones}</span><br>
   <span>Languages:</span><br>
   `;
   country.languages.forEach(language => {
      p.append(" ", language.name);
   });

   const img = document.createElement("img");
   img.src = country.flag;
   img.alt = `Flag of ${country.name}`;

   divCountry.append(p, img);
   return divCountry;
};

export { Country, SingleCountry };
