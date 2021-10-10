const divKorisnik = document.getElementById("korisnik");
const divProizvodi = document.querySelector(".proizvodi");

class Korisnik {
   static registrovaniKorisnici = [];
   username;
   password;
   constructor(username, password) {
      this.username = username;
      this.password = password;
   }
}

class Kupac extends Korisnik {
   #korpa;
   constructor(username, password) {
      super(username, password);
      this.#korpa = [];
   }

   get korpa() {
      return this.#korpa;
   }

   dodajUKorpu(proizvod, kolicina) {
      this.#korpa.push({ proizvod: proizvod, kolicina: kolicina });
   }
   obrisiIzKorpe(item) {
      this.#korpa.splice(this.#korpa.indexOf(item), 1);
   }

   addKorisnikToDOM() {
      divKorisnik.innerHTML = "";
      const divUser = document.createElement("div");
      const naslov = document.createElement("h3");
      naslov.textContent = this.username;

      const divKorpa = document.createElement("div");
      this.#korpa.forEach(item => {
         const divItem = document.createElement("div");
         const opis = document.createElement("p");
         opis.innerHTML = `${item.proizvod.naziv} <br> ${item.proizvod.cena} <br> ${item.kolicina}`;

         const btnDeleteItem = document.createElement("button");
         btnDeleteItem.textContent = "Obrisi iz korpe";

         btnDeleteItem.addEventListener("click", () => {
            this.obrisiIzKorpe(item);
            divKorisnik.append(this.addKorisnikToDOM());
            item.proizvod.stanje += Number(item.kolicina);
            divProizvodi.append(Proizvod.dodajProizvodeNaDom(this));
         });

         divItem.append(opis, btnDeleteItem);
         divKorpa.append(divItem);
      });

      divUser.append(naslov, divKorpa);

      return divUser;
   }
}

class Proizvod {
   static proizvodi = [];
   naziv;
   cena;
   stanje;
   constructor(naziv, cena, stanje) {
      this.naziv = naziv;
      this.cena = cena;
      this.stanje = stanje;
   }

   toString() {
      return `${this.naziv} <br> ${this.cena} <br> ${this.stanje}`;
   }

   static dodajProizvodeNaDom(user) {
      divProizvodi.innerHTML = "";

      const divLista = document.createElement("div");

      Proizvod.proizvodi.forEach(proizvod => {
         const divProizvod = document.createElement("div");

         const p = document.createElement("p");
         p.innerHTML = proizvod.toString();
         divProizvod.append(p);

         if (user instanceof Korisnik) {
            const inputKolicina = document.createElement("input");
            inputKolicina.type = "number";

            const korpaBtn = document.createElement("button");
            korpaBtn.textContent = "Dodaj u korpu";

            korpaBtn.addEventListener("click", () => {
               if (Number(inputKolicina.value) <= proizvod.stanje && inputKolicina.value != "") {
                  user.dodajUKorpu(proizvod, inputKolicina.value);
                  divKorisnik.append(user.addKorisnikToDOM());
                  proizvod.stanje -= inputKolicina.value;
                  divProizvodi.append(Proizvod.dodajProizvodeNaDom(user));
               } else {
                  console.log("Kolicina nije validna!");
               }
            });
            divProizvod.append(inputKolicina, korpaBtn);
         }

         divLista.append(divProizvod);
      });
      return divLista;
   }
}

class PrehrambeniProizvod extends Proizvod {
   rokTrajanja;
   constructor(naziv, cena, stanje, rokTrajanja) {
      super(naziv, cena, stanje);
      this.rokTrajanja = rokTrajanja;
   }

   toString() {
      return super.toString() + `<br> ${this.rokTrajanja}`;
   }
}

class BelaTehnika extends Proizvod {
   garancija;
   constructor(naziv, cena, stanje, garancija) {
      super(naziv, cena, stanje);
      this.garancija = garancija;
   }

   toString() {
      return super.toString() + `<br> ${this.garancija}`;
   }
}

class Admin extends Korisnik {
   constructor(username, password) {
      super(username, password);
   }

   addKorisnikToDOM() {
      divKorisnik.innerHTML = "";
      const divAdmin = document.createElement("div");
      const naslov = document.createElement("h3");
      naslov.textContent = this.username;

      const forma = document.createElement("form");
      forma.innerHTML = `
      <p>Naziv proizvoda:</p>
      <input type="text" id="inputNaziv" />
      <p>Cena proizvoda</p>
      <input type="text" id="inputCena" />
      <p>Stanje proizvoda</p>
      <input type="text" id="inputStanje" /><br /><br />
      <select name="" id="tipProizvoda">
      <option value="0" selected disabled>Izaberi tip proizvoda</option>
      <option value="1">Prehrambeni proizvod</option>
      <option value="2">bela tehnika</option>
      </select>
      <p>Rok/Garancija</p>
      <input type="text" id="inputRok" />
      <input type="submit" value="Dodaj proizvod" />`;

      forma.addEventListener("submit", event => {
         event.preventDefault();
         const inputNaziv = document.getElementById("inputNaziv");
         const inputCena = document.getElementById("inputCena");
         const inputStanje = document.getElementById("inputStanje");
         const inputRok = document.getElementById("inputRok");
         const select = document.querySelector("#tipProizvoda");

         if (select.value == "1") {
            Proizvod.proizvodi.push(new PrehrambeniProizvod(inputNaziv.value, Number(inputCena.value), Number(inputStanje.value), inputRok.value));
         }
         if (select.value == "2") {
            Proizvod.proizvodi.push(new BelaTehnika(inputNaziv.value, Number(inputCena.value), Number(inputStanje.value), inputRok.value));
         }
         divProizvodi.append(Proizvod.dodajProizvodeNaDom(this));
      });
      divAdmin.append(naslov, forma);
      divKorisnik.append(divAdmin);
   }
}

export { Korisnik, Kupac, Admin, Proizvod, PrehrambeniProizvod, BelaTehnika };
