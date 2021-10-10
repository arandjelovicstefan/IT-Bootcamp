import { countries } from "..";
import { divApp, main } from "./Constants";
import { Countries } from "./Countries";
import { SingleCountry } from "./Country";

const Buttons = country => {
   let item = 0;
   let incr = 0;

   let nextBtn = document.createElement("button");
   nextBtn.textContent = "Next";
   nextBtn.addEventListener("click", () => {
      main.innerHTML = "";
      item = countries.indexOf(country);
      main.append(SingleCountry(countries[item + ++incr]));
   });

   let previousBtn = document.createElement("button");
   previousBtn.textContent = "Previous";
   previousBtn.addEventListener("click", () => {
      main.innerHTML = "";
      item = countries.indexOf(country);
      main.append(SingleCountry(countries[item - --incr]));
   });

   let backBtn = document.createElement("button");
   backBtn.textContent = "Back";
   backBtn.addEventListener("click", () => {
      divApp.innerHTML = "";
      main.innerHTML = "";
      main.append(...Countries(countries));
   });

   divApp.append(backBtn, previousBtn, nextBtn);
   return divApp;
};

export { Buttons };
