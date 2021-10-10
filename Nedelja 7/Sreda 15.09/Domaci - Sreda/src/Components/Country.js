const Country = country => {
   const divCountry = document.createElement("div");

   const p = document.createElement("p");
   p.textContent = country.name;

   const img = document.createElement("img");
   img.src = country.flag;
   img.alt = `Flag of ${country.name}`;

   divCountry.append(p, img);

   return divCountry;
};

const singleCountry = country => {
   const divCountry = document.createElement("div");

   const p = document.createElement("p");
   p.innerHTML = `<span>Name: ${country.name}</span><br>
   <span>Native name: ${country.nativeName}</span><br>
   <span>Capital: ${country.capital}</span><br>
   <span>Country domain: ${country.topLevelDomain[0]}</span><br>
   <span>Population: ${country.population}</span><br>`;

   const img = document.createElement("img");
   img.src = country.flag;
   img.alt = `Flag of ${country.name}`;

   divCountry.append(p, img);

   return divCountry;
};

export { Country, singleCountry };
