//nadovezivanje na 3 zadatak sa predhodnog domaceg
//1. Napraviti html strukturu da se na pocetku vide 2 button-a. Kada se klikne na oba (naravno ponaosob),
//trebaju se izlistati svi pokemoni iz niza u svom dugmetu. Na klik jednog dugmeta, trebaju se izlistati
//sve informacije o tom pokemonu.

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

const btnPlayer1 = document.querySelector(".player1btn");
const btnPlayer2 = document.querySelector(".player2btn");
const pPlayer1 = document.querySelector(".player1p");
const pPlayer2 = document.querySelector(".player2p");

const carizard = document.createElement("button");
carizard.textContent = "Carizard";
const pikacu = document.createElement("button");
pikacu.textContent = "Pikacu";
const bulbasaur = document.createElement("button");
bulbasaur.textContent = "Bulbasaur";
const rattata = document.createElement("button");
rattata.textContent = "Rattata";

btnPlayer1.addEventListener("click", () => {
   pPlayer1.append(carizard, pikacu);
   btnPlayer1.remove();
});

btnPlayer2.addEventListener("click", () => {
   pPlayer2.append(bulbasaur, rattata);
   btnPlayer2.remove();
});

carizard.addEventListener("click", () => {
   pPlayer1.innerHTML = `<div>Ime: ${pokemon1.ime}<br />
   Vrsta: ${pokemon1.vrsta}<br /> 
   Sposobnosti: ${pokemon1.sposobnosti}<br /> 
   Napad: ${pokemon1.karakteristike.napad}<br />
   Odbrana: ${pokemon1.karakteristike.odbrana}<br />
   Brzina: ${pokemon1.karakteristike.brzina}<br /></div>`;
});

pikacu.addEventListener("click", () => {
   pPlayer1.innerHTML = `<div>Ime: ${pokemon2.ime}<br />
   Vrsta: ${pokemon2.vrsta}<br /> 
   Sposobnosti: ${pokemon2.sposobnosti}<br /> 
   Napad: ${pokemon2.karakteristike.napad}<br />
   Odbrana: ${pokemon2.karakteristike.odbrana}<br />
   Brzina: ${pokemon2.karakteristike.brzina}<br /></div>`;
});

bulbasaur.addEventListener("click", () => {
   pPlayer2.innerHTML = `<div>Ime: ${pokemon3.ime}<br />
   Vrsta: ${pokemon3.vrsta}<br /> 
   Sposobnosti: ${pokemon3.sposobnosti}<br /> 
   Napad: ${pokemon3.karakteristike.napad}<br />
   Odbrana: ${pokemon3.karakteristike.odbrana}<br />
   Brzina: ${pokemon3.karakteristike.brzina}<br /></div>`;
});

rattata.addEventListener("click", () => {
   pPlayer2.innerHTML = `<div>Ime: ${pokemon4.ime}<br />
   Vrsta: ${pokemon4.vrsta}<br /> 
   Sposobnosti: ${pokemon4.sposobnosti}<br /> 
   Napad: ${pokemon4.karakteristike.napad}<br />
   Odbrana: ${pokemon4.karakteristike.odbrana}<br />
   Brzina: ${pokemon4.karakteristike.brzina}<br /></div>`;
});
