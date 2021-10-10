/**
 *
 * 1. Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati proizvoljno.
 *
 * 2. Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja i zbir ispisati na ekranu. HTML kreirati proizvoljno.
 *
 * 3. Nadovezivanje na predhodni zadatak. Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.
 */

const prviInput = document.querySelector(".prviBroj");
const drugiInput = document.querySelector(".drugiBroj");
const submitBtn = document.querySelector(".submit");
const checkbox = document.querySelector(".check");
const toggle = document.querySelector(".toggle");
const zbirPara = document.querySelector(".rezultat");
const tabela = document.querySelector(".tabela");
const tabelaBtn = document.querySelector(".dodavanjeReda");

const sabiranje = () => {
   let zbir = Number(prviInput.value) + Number(drugiInput.value);
   zbirPara.innerHTML = `Zbir je: ${zbir}`;
   prviInput.value = "";
   drugiInput.value = "";
};

submitBtn.addEventListener("click", sabiranje);

checkbox.addEventListener("change", () => {
   toggle.classList.toggle("notVisible");
});

tabelaBtn.addEventListener("click", () => {
   let noviTr = document.createElement("tr");
   let noviTd1 = document.createElement("td");
   noviTd1.textContent = "1";
   let noviTd2 = document.createElement("td");
   noviTd2.textContent = "1";
   let noviTd3 = document.createElement("td");
   noviTd3.textContent = "1";
   let noviTd4 = document.createElement("td");
   noviTd4.textContent = "1";
   noviTr.append(noviTd1, noviTd2, noviTd3, noviTd4);
   tabela.append(noviTr);
});
