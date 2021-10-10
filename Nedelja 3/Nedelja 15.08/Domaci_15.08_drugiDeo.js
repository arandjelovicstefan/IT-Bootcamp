////////////////////////////////////////////ZA PETAK////////////////////////////////////
//4. Sortirati pokemone po brzini, rastuće.
//5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.

let pokemon1 = {
   ime: "carizard",
   vrsta: "zmaj",
   sposobnosti: ["brzi napad", "vatreni napad"],
   karakteristike: {
      napad: 761,
      odbrana: 558,
      brzina: 2314,
   },
};

let pokemon2 = {
   ime: "pikacu",
   vrsta: "elektricni",
   sposobnosti: ["elektricni napad", "udar groma", "munje"],
   karakteristike: {
      napad: 512,
      odbrana: 224,
      brzina: 912,
   },
};

let pokemon3 = {
   ime: "bulbasaur",
   vrsta: "zemljani",
   sposobnosti: ["zemljani napad", "dugo prezivljavanje", "jaka odbrana"],
   karakteristike: {
      napad: 314,
      odbrana: 682,
      brzina: 810,
   },
};

let pokemon4 = {
   ime: "rattata",
   vrsta: "pacov",
   sposobnosti: ["velika brzina", "jak napad", "slaba odbrana", "veliki zubi"],
   karakteristike: {
      napad: 520,
      odbrana: 150,
      brzina: 1630,
   },
};

let pokemon5 = {
   ime: "vuliks",
   vrsta: "lisica",
   sposobnosti: ["pretvaranje", "kontrola vatre"],
   karakteristike: {
      napad: 410,
      odbrana: 220,
      brzina: 1217,
   },
};

let skupPokemona = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5];

//zadatak 4

const sortiranjePokemona = function (nizPokemona) {
   nizPokemona.sort(function (a, b) {
      return a.karakteristike.brzina - b.karakteristike.brzina;
   });
};

sortiranjePokemona(skupPokemona);
console.log(skupPokemona);

//zadatak 5

const najjaciPokemon = function (nizPokemona) {
   const maxNapad = Math.max.apply(
      Math,
      nizPokemona.map(najjaci => najjaci.karakteristike.napad)
   );
   for (let i = 0; i < nizPokemona.length; i++) {
      if (nizPokemona[i].karakteristike.napad == maxNapad) return `Najjaci je ${nizPokemona[i].ime}, napad: ${maxNapad}`;
   }
};
najjaciPokemon(skupPokemona);
