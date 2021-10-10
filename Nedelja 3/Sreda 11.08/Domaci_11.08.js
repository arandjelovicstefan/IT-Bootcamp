// /**
//  * 1. Napisati funkciju koja vraca najduzi palindrom u datom stringu.
// Napomena: nije potrebno da se ispituje da li je uneti string palindrom, neka se podrazumeva da jeste
// Primer: "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
// Ispis: "12345678987654321"
//  */

// Palindrom

//provera da li je palindrom, vraca true/false
const palindrom = function (str) {
   let specKarakter = /[\W_]/g;
   let malaSlova = str.toLowerCase().replace(specKarakter, "");
   let unazad = malaSlova.split("").reverse().join("");
   return malaSlova == unazad;
};

palindrom("Ana, voli Milovana");

// najduzi palindrom sa funkcijom za proveravanje i uporedjivanje

const najduziPalindrom = function (str) {
   if (str.length <= 1) return str;
   let pocetak = 0;
   let kraj = 0;
   for (let i = 0; i < str.length; i++) {
      const duzina1 = prosirenjeCentra(str, i, i);
      const duzina2 = prosirenjeCentra(str, i, i + 1);
      const duzina = Math.max(duzina1, duzina2);
      if (duzina > kraj - pocetak) {
         pocetak = i - (duzina - 1) / 2;
         kraj = i + duzina / 2;
      }
   }
   return str.slice(Math.ceil(pocetak), kraj + 1);
};

function prosirenjeCentra(str, levo, desno) {
   let L = levo;
   let D = desno;
   while (L > -1 && D < str.length) {
      if (str[L] !== str[D]) break;
      L--;
      D++;
   }
   return D - L - 1;
}

najduziPalindrom(`HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE`);
