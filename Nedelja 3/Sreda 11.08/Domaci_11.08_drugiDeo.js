/**
 * 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz
 *
 * 2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...
 *
 * 4. За првих 100 бројева исписати:
 *       ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
 *       Ако је дељив са 3,5,7 - FizzBuzzZazz
 *       3,5 - FizzBuzz
 *       3,7 - FizzZazz
 *       5,7 - BuzzZazz
 *
 * 5. Izvrsiti inverziju brojeva bez pomocne promenljive.
 *      Pr: x = 5 y = 9
 *      Resenje: x = 9 y = 5
 *      pom = "ne mozete koristiti"
 *
 */

//zadatak 1

{
   const sabiranjeMnozenje = function (niz) {
      let zbir = 0;
      let proizvod = 1;
      let noviNiz = [];
      for (let i = 0; i < niz.length; i++) {
         zbir += niz[i];
         proizvod *= niz[i];
      }
      noviNiz.push(zbir, proizvod);
      return noviNiz;
   };

   let niz = [2, 5, 3, 10, 15];
   sabiranjeMnozenje(niz);
}

//zadatak 2

{
   const cistNiz = function (niz) {
      let noviNiz = [];
      for (let i = 0; i < niz.length; i++) {
         if (niz[i]) {
            noviNiz.push(niz[i]);
         }
      }
      return noviNiz;
   };

   cistNiz([1, 2, , 3, , 3, , , , , , 4, , 4, , 5, , 6, , , , NaN, undefined, 0, "", null]);
}

//zadatak 4

{
   for (let i = 0; i < 100; i++) {
      if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
         console.log(`Deljiv sa 3,5,7 - FizzBuzzZazz`);
      } else if (i % 3 == 0 && i % 5 == 0) {
         console.log(`Deljiv sa 3,5 - FizzBuzz`);
      } else if (i % 3 == 0 && i % 7 == 0) {
         console.log(`Deljiv sa 3,7 - FizzZazz`);
      } else if (i % 5 == 0 && i % 7 == 0) {
         console.log(`Deljiv sa 5,7 - BuzzZazz`);
      } else if (i % 3 == 0) {
         console.log(`Deljiv sa 3 - Fizz`);
      } else if (i % 5 == 0) {
         console.log(`Deljiv sa 5 - Buzz`);
      }
   }
}

//zadatak 5

{
   let x = 10;
   let y = 5;

   x = x + y;
   y = x - y;
   x = x - y;

   console.log(x, y);
}
