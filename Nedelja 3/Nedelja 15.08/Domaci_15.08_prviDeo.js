//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5

//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime
// * Vrsta
// * Sposobnosti (niz sposobnosti pokemona)
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)

//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona

//zadatak 1

{
   function deljiviSa5(niz) {
      for (let i = 0; i < niz.length; i++) {
         if (niz[i] % 5 == 0) console.log(niz[i]);
      }
   }

   deljiviSa5([1, 2, 3, 45, 32, 25]);
}

//zadatak 2

{
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

   //zadatak 3

   function sposobnosti(nizObj) {
      let nizSposobnostiSvih = [];
      for (let i = 0; i < nizObj.length; i++) {
         nizSposobnostiSvih.push(nizObj[i].sposobnosti);
      }
      return nizSposobnostiSvih;
   }

   sposobnosti(skupPokemona);
}
