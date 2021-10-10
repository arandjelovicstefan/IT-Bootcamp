import { Proizvod, Korisnik, Kupac, Admin, PrehrambeniProizvod, BelaTehnika } from "./module.js";

const divKorisnik = document.getElementById("korisnik");
const divProizvodi = document.querySelector(".proizvodi");
const forma = document.getElementById("forma");
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");

Proizvod.proizvodi.push(new PrehrambeniProizvod("mleko", 200, 3, "1.3.2021"), new BelaTehnika("Sporet", 30000, 5, 5));
Korisnik.registrovaniKorisnici.push(new Kupac("stefan", "123"), new Admin("admin", "123"));

console.log(Proizvod.proizvodi);
console.log(Korisnik.registrovaniKorisnici);

divProizvodi.append(Proizvod.dodajProizvodeNaDom());

forma.addEventListener("submit", event => {
   event.preventDefault();

   let loggedUser = Korisnik.registrovaniKorisnici.find(korisnik => korisnik.username == inputUsername.value && korisnik.password == inputPassword.value);

   if (loggedUser) {
      divKorisnik.append(loggedUser.addKorisnikToDOM());
      divProizvodi.append(Proizvod.dodajProizvodeNaDom(loggedUser));
   } else {
      console.log("Ne postoji takav korisnik");
   }
});
