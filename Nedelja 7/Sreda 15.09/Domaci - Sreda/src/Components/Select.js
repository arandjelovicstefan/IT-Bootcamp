import { main, selectDiv } from "./Constants";
import { Countries } from "./Countries";

const Select = countrys => {
   selectDiv.innerHTML = "";
   let regionArray = [];
   countrys.forEach(region => {
      regionArray.push(region.region);
   });
   let filteredRegion = [...new Set(regionArray)];

   const selectOption = document.createElement("select");
   const defaultOption = document.createElement("option");
   defaultOption.textContent = "Filter by region";
   defaultOption.value = "-1";
   defaultOption.selected = true;
   defaultOption.disabled = true;
   defaultOption.hidden = true;
   selectOption.append(defaultOption);

   filteredRegion.forEach(region => {
      const newOption = document.createElement("option");
      newOption.value = `${region}`;
      newOption.textContent = `${region}`;
      if (region == "") newOption.textContent = `${"Other"}`;
      selectOption.append(newOption);
   });
   selectDiv.append(selectOption);

   selectOption.addEventListener("change", () => {
      main.innerHTML = "";
      let filter = countrys.filter(country => country.region == selectOption.value);
      main.append(...Countries(filter));
   });
};

export { Select };
