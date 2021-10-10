//Zadatak sa stringovima

let string1 = "neki prvi string"
let string2 = "neki drugi string koji je i duzi string"
let string3 = "neki treci string koji je dugacak"
let string4 = "neki cetvrti"

let str1 = string1.length;
let str2 = string2.length;
let str3 = string3.length;
let str4 = string4.length;

//1. Proveriti koji je string najduzi i ispisati samo njega
if (str1 > str2 && str1 > str3 && str1 > str4) {
    console.log("String 1 je najduzi string.")
}else if (str2 > str1 && str2 > str3 && str2 > str4) {
    console.log("String 2 je najduzi string.")
}else if (str3 > str1 && str3 > str2 && str3 > str4) {
    console.log("String 3 je najduzi string.")
}else if (str4 > str1 && str4 > str2 && str4 > str3) {
    console.log("String 4 je najduzi string.")
}

//2. Ispisati najkraci string koji sadrzi rec "string"
//Provera da li sadrzi rec string
let provera1;

if (string1.indexOf("string") > -1) {
    provera1 = true;
}else {
    provera1 = false;
}

let provera2;

if (string2.indexOf("string") > -1) {
    provera2 = true;
}else {
    provera2 = false;
}

let provera3;

if (string3.indexOf("string") > -1) {
    provera3 = true;
}else {
    provera3 = false;
}

let provera4;

if (string4.indexOf("string") > -1) {
    provera4 = true;
}else {
    provera4 = false;
}

if (str1 < str2 && str1 < str3 && str1 < str4 && (provera1 == true)) {
    console.log("String 1 je najmanji string koji sadrzi rec 'string'")
}else if (str2 < str1 && str2 < str3 && str2 < str4 && (provera2 == true)) {
    console.log("String 2 je najmanji string koji sadrzi rec 'string'")
}else if (str3 < str1 && str3 < str2 && str3 < str4 && (provera3 == true)) {
    console.log("String 3 je najmanji string koji sadrzi rec 'string'")
}else if (str4 < str1 && str4 < str2 && str4 < str3 && (provera4 == true)) {
    console.log("String 4 je najmanji string koji sadrzi rec 'string'")
}

//3. sastaviti sve stringove bez prve reci "neki" 
//osim ako string sadrzi deo recenice "string koji je", 
//takve stringove izostaviti

let str1neki;
let str2neki;
let str3neki;
let str4neki;

if (string1.indexOf("string koji je") > -1) {
    console.log("String sadrzi deo recenice 'string koji je'");
}else {
    str1neki = string1.replace("neki ", "");
}

if (string2.indexOf("string koji je") > -1) {
    console.log("String sadrzi deo recenice 'string koji je'");
}else {
    str2neki = string2.replace("neki ", "");
}

if (string3.indexOf("string koji je") > -1) {
    console.log("String sadrzi deo recenice 'string koji je'");
}else {
    str3neki = string3.replace("neki ", "");
}

if (string4.indexOf("string koji je") > -1) {
    console.log("String sadrzi deo recenice 'string koji je'");
}else {
    str4neki = string4.replace("neki ", "");
}


//Zadatak sa casa

let kolicina = 1870;
let cenaArtikla = 220;
let novac = 750;

let kolicinaKg = kolicina / 1000;
let ukupnaCena = cenaArtikla * kolicinaKg;

if ((cenaArtikla * kolicinaKg) > novac) {
    console.log("Nema dovoljno novca za trazenu kupovinu.");
}else {
    console.log("Ukupna cena je:"+ ukupnaCena);
}