/*
1. Puz se penje uz drvo odredjenom brzinom (recimo da predje 3cm da dan).
Drvo svaki dan poraste za 1 cm.

Za zadatu brzinu puza (u centrimetrima po danu) i zadatu pocetnu visinu drveta (u centimetrima),
izracunati koliko je dana potrebno puzu da se popne na drvo
pomocu WHILE petlje.

Napraviti presek svakog dana, dakle program treba da izbaci sledece poruke (za brzinu puza 3 i visinu drveta 100) :

Dan 1: Puz je presao 3cm, visina drveta 100cm
Dan 2: Puz je presao 6cm, visina drveta 101cm
...

Na kraju treba da se ispise poruka na primer:

Puz se popeo na drvo za 8 dana

Smatrati da drvo svakog dana raste fiksno 1cm.

2. Treba izracunati poptust U DINARIMA koji ostvaruje kupac.

Pravila za ostvarivanje popusta su sledeca:

Zaposlena lica ostvaruju popust od 5% za iznos koji je veci od 5000 din.
Studenti ostvaruju popust 20% za isnose koji su veci od 3000 din.
Penzioneri ostvaruju popust od 30% za iznose koji su veci od 2000 din.
Firme ostvaruju popust od 10% za iznose koji su veci od 10000 din.
Svi ostali ne ostaruju nikakav popust.

Ako kupovina pada za vikend (subota ili nedelja)
odnosno ako je TEKUCI DAN U NEDELJI kada se izvrsava program subota ili nedelja,
onda je u toku vikend akcija gde svi ostvaruju dodatni popust od 5%,
osnova za dodatni popust je iznos umanjen za prethodni popust na osnovu tipa kupca na primer:

Iznos je 10000 din, na osnovu tipa kupac je ostvario popust od 2000 din,
osnova za vikend akciju je 10000 - 2000 = 8000 din,
dakle racuna se 5% od 8000 din a ne od pocetnog iznosa
i dobije se dodatni popust od 400.
Tako da je na kraju ukupan popust 2000 + 400 = 2400 dinara
*/

//zadatak 1

let drvo = 99; // 99 sam namerno stavio jer krece dodavanje odmah od prvog kruga sa while, tako da je prvo ispisivanje zapravo da je puz presao 3cm za visinu drveta 100cm
let puz = 0;
let dani = 0;

while (puz <= drvo) {
  puz += 3;
  drvo++;
  dani++;
  console.log(`Za brzinu puza 3 i visinu drveta ${drvo}`);
  console.log(`Dan ${dani}: puz je presao ${puz}cm, visina drveta ${drvo}cm`);
  console.log(`Puz se popeo na drvo za ${dani} dana.`);
}

//zadatak 2

let korisnik = "zaposleni";
let zaposleni; // 5%
let studenti; // 20%
let penzioneri; // 30%
let firme; // 10%
let iznosNovca = 10000;
let daniVikenda = 3;

let zaposleniVikend;
let studentiVikend;
let penzioneriVikend;
let firmeVikend;

if (daniVikenda > 0 && daniVikenda <= 5) {
  switch (korisnik) {
    case "zaposleni":
      if (iznosNovca > 5000) {
        zaposleni = iznosNovca * (95 / 100);
        console.log(`Zaposleni ostvaruje popust od ${iznosNovca - zaposleni}din zato sto je cena veca od 5000din. Standardna cena: ${iznosNovca}din. Cena koju placa zaposleni: ${zaposleni}din.`);
      } else if (iznosNovca < 5000) {
        zaposleni = iznosNovca;
        console.log(`Zaposleni nije ostvario nikakav popust jer je cena manja od 5000din. Cena je ${zaposleni}din`);
      }
      break;
      case "studenti":
        if (iznosNovca > 3000) {
          studenti = iznosNovca * (80 / 100);
          console.log(`Student ostvaruje popust od ${iznosNovca - studenti}din zato sto je cena veca od 3000din. Standardna cena: ${iznosNovca}din. Cena koju placa student: ${studenti}din.`);
        } else if (iznosNovca < 3000) {
          studenti = iznosNovca;
          console.log(`Student nije ostvario nikakav popust jer je cena manja od 3000din. Cena je ${studenti}din`);
        }
        break;
        case "penzioneri":
            if (iznosNovca > 2000) {
              penzioneri = iznosNovca * (70 / 100);
              console.log(`Penzioner ostvaruje popust od ${iznosNovca - penzioneri}din zato sto je cena veca od 2000din. Standardna cena: ${iznosNovca}din. Cena koju placa penzioner: ${penzioneri}din.`);
            } else if (iznosNovca < 2000) {
              penzioneri = iznosNovca;
              console.log(`Penzioner nije ostvario nikakav popust jer je cena manja od 2000din. Cena je ${penzioneri}din`);
            }
            break;
            case "firme":
                if (iznosNovca > 10000) {
                  firme = iznosNovca * (90 / 100);
                  console.log(`Firma ostvaruje popust od ${iznosNovca - firme}din zato sto je cena veca od 10000din. Standardna cena: ${iznosNovca}din. Cena koju placa firma: ${firme}din.`);
                } else if (iznosNovca < 10000) {
                  firme = iznosNovca;
                  console.log(`Firma nije ostvarila nikakav popust jer je cena manja od 10000din. Cena je ${firme}din`);
                }
                break;
  }
}else if (daniVikenda == 6 || daniVikenda == 7) {
    switch (korisnik) {
        case "zaposleni":
          if (iznosNovca > 5000) {
            zaposleni = iznosNovca * (95 / 100);
            zaposleniVikend = zaposleni * (95 / 100);
            console.log(`Zaposleni ostvaruje popust od ${iznosNovca - zaposleni}din zato sto je cena veca od 5000din. Standardna cena: ${iznosNovca}din. Dodatni vikend popust ${zaposleni-zaposleniVikend}din. Cena koju placa zaposleni sa dodatnim vikend popustom od 5%: ${zaposleniVikend}din.`);
          } else if (iznosNovca < 5000) {
            zaposleni = iznosNovca;
            console.log(`Zaposleni nije ostvario nikakav popust jer je cena manja od 5000din. Cena je ${zaposleni}din`);
          }
          break;
          case "studenti":
            if (iznosNovca > 3000) {
              studenti = iznosNovca * (80 / 100);
              studentiVikend = studenti * (95 / 100);
              console.log(`Student ostvaruje popust od ${iznosNovca - studenti}din zato sto je cena veca od 3000din. Standardna cena: ${iznosNovca}din. Dodatni vikend popust ${studenti - studentiVikend}din. Cena koju placa student sa dodatnim vikend popustom od 5%: ${studentiVikend}din.`);
            } else if (iznosNovca < 3000) {
              studenti = iznosNovca;
              console.log(`Student nije ostvario nikakav popust jer je cena manja od 3000din. Cena je ${studenti}din`);
            }
            break;
            case "penzioneri":
                if (iznosNovca > 2000) {
                  penzioneri = iznosNovca * (70 / 100);
                  penzioneriVikend = penzioneri * (95 / 100);
                  console.log(`Penzioner ostvaruje popust od ${iznosNovca - penzioneri}din zato sto je cena veca od 2000din. Standardna cena: ${iznosNovca}din. Dodatni vikend popust ${penzioneri - penzioneriVikend}din. Cena koju placa penzioner sa dodatnim vikend popustom od 5%: ${penzioneriVikend}din.`);
                } else if (iznosNovca < 2000) {
                  penzioneri = iznosNovca;
                  console.log(`Penzioner nije ostvario nikakav popust jer je cena manja od 2000din. Cena je ${penzioneri}din`);
                }
                break;
                case "firme":
                    if (iznosNovca > 10000) {
                      firme = iznosNovca * (90 / 100);
                      firmeVikend = firme * (95 / 100);
                      console.log(`Firma ostvaruje popust od ${iznosNovca - firme}din zato sto je cena veca od 10000din. Standardna cena: ${iznosNovca}din. Dodatni vikend popust ${firme - firmeVikend}din. Cena koju placa firma sa dodatnim vikend popustom od 5%: ${firmeVikend}din.`);
                    } else if (iznosNovca < 10000) {
                      firme = iznosNovca;
                      console.log(`Firma nije ostvarila nikakav popust jer je cena manja od 10000din. Cena je ${firme}din`);
                    }
                    break;
}
}