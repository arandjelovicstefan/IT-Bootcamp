// Napisati validaciju za formu koja sadrzi polja:
// input-text(name, surname, passwordInput, passwordInputConfirm)
// checkbox(courses)
// select(city)
// radiobutton(gender)
// Za polje name => obavezno, minimum 5 karaktera, maksimum 15
// Za polje surname => obavezno, minimum 5 karaktera, maksimum 20
// Za polje passwordInput => obavezno, minimum 8 karaktera, da sadrzi broj i veliko slovo
// Za polje passwordInputConfirm => da je isto kao i passwordInput
// Za polje course => obavezno

//klikom na register ako validacija ne prodje ispisati greske ispod polja (za svako polje ponaosob)
//ako validacija prodje, kreirati objekat user ubaciti ga u niz users i ispisati ga na ekranu (ispisati ceo niz)
//kada se kreira user: 1. ime i prezime mora biti trimovano i setovati samo prvo slovo kao veliko a sva ostala da budu mala
//nakon svakog unosa potrebno je ispisati novog user-a i obrisati sve inpute (staviti ih na pocetne vrednosti)

//HTML I CSS po sopstvenom izboru!!!!!!!!!!!!!!!

const nameInput = document.getElementById("inpName");
const surnameInput = document.getElementById("inpSurname");
const passwordInput = document.getElementById("inpPassword");
const passwordInputConfirm = document.getElementById("inpPasswordConfirm");

const errName = document.querySelector(".errName");
const errSurname = document.querySelector(".errSurname");
const errPassword = document.querySelector(".errPassword");
const errPasswordConfirm = document.querySelector(".errPasswordConfirm");

const radioMale = document.getElementById("radioMale");
const radioFemale = document.getElementById("radioFemale");
const errRadio = document.querySelector(".errRadio");

const selectCity = document.querySelector(".citySelect");
const errSelect = document.querySelector(".errSelect");

const checkHtml = document.getElementById("checkHtml");
const checkJavascript = document.getElementById("checkJavascript");
const checkCss = document.getElementById("checkCss");
const errCheck = document.querySelector(".errCheck");

const btnSubmit = document.querySelector(".submitBtn");
const visualInput = document.querySelector(".regInfo");

let isValid = true;

const stringHasNumber = str => {
   let number = /\d/;
   return number.test(str);
};

const stringHasUpperCase = str => {
   let chars = /[A-Z]/;
   return chars.test(str);
};

const firstTrimmed = word => {
   let trimmed = word.trim();
   return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
};

let userArray = [];

btnSubmit.addEventListener("click", event => {
   event.preventDefault();

   errName.innerHTML = "";
   errSurname.innerHTML = "";
   errPassword.innerHTML = "";
   errPasswordConfirm.innerHTML = "";
   errSelect.innerHTML = "";
   errRadio.innerHTML = "";
   errCheck.innerHTML = "";
   visualInput.innerHTML = "";

   if (nameInput.value == "") {
      errName.textContent = "This field is required!";
      isValid = false;
   } else if (nameInput.value.length <= 5) {
      errName.textContent = "This field must include minimum five character!";
      isValid = false;
   } else if (nameInput.value.length >= 15) {
      errName.textContent = "This field must have less then fifteen characters!";
      isValid = false;
   }

   if (surnameInput.value == "") {
      errSurname.textContent = "This field is required!";
      isValid = false;
   } else if (surnameInput.value.length <= 5) {
      errSurname.textContent = "This field must include minimum five character!";
      isValid = false;
   } else if (surnameInput.value.length >= 20) {
      errSurname.textContent = "This field must have less then twenty characters!";
      isValid = false;
   }

   if (passwordInput.value == "") {
      errPassword.textContent = "This field is required!";
      isValid = false;
   } else if (passwordInput.value.length <= 8) {
      errPassword.textContent = "This field must include minimum eight character!";
      isValid = false;
   } else if (!stringHasNumber(passwordInput.value)) {
      errPassword.textContent = "This field must include at least one number!";
      isValid = false;
   } else if (!stringHasUpperCase(passwordInput.value)) {
      errPassword.textContent = "This field must include at least one uppercase!";
      isValid = false;
   }

   if (passwordInputConfirm.value != passwordInput.value) {
      errPasswordConfirm.textContent = "Password does not match!";
      isValid = false;
   }

   if (!(selectCity.value == "Beograd" || selectCity.value == "Novi Sad" || selectCity.value == "Nis" || selectCity.value == "Paracin")) {
      errSelect.textContent = "You need to select City!";
      isValid = false;
   }

   if (radioMale.checked == false && radioFemale.checked == false) {
      errRadio.textContent = "You need to select gender!";
   }

   let radioBtnIs = "";
   if (radioMale.checked == true) {
      radioBtnIs = "Male";
   } else if (radioFemale.checked == true) {
      radioBtnIs = "Female";
   }

   let checkboxValue = "";
   if (checkHtml.checked == true) checkboxValue += "HTML ";
   if (checkJavascript.checked == true) checkboxValue += "Javascript ";
   if (checkCss.checked == true) checkboxValue += "CSS ";
   if (checkCss.checked == false && checkJavascript.checked == false && checkHtml.checked == false) {
      isValid = false;
      errCheck.textContent = "Check course that suits you!";
   }

   if (isValid) {
      let userInfo = {
         Name: firstTrimmed(nameInput.value),
         Surname: firstTrimmed(surnameInput.value),
         Password: passwordInput.value,
         Gender: radioBtnIs,
         City: selectCity.value,
         Options: checkboxValue,
      };
      userArray.push(userInfo);
      console.log(userInfo);

      visualInput.innerHTML = `
      <div class="visualInput">
      Registration completed successfully! <br />
      Name: ${firstTrimmed(nameInput.value)}<br />
      Surname: ${firstTrimmed(surnameInput.value)}<br />
      Password: ${passwordInput.value}<br />
      Gender: ${radioBtnIs}<br />
      City: ${selectCity.value}<br />
      Options: ${checkboxValue}<br />
      </div>
      `;

      nameInput.value = "";
      surnameInput.value = "";
      passwordInput.value = "";
      passwordInputConfirm.value = "";
      radioBtnIs = "";
      checkboxValue = "";
      radioMale.checked = false;
      radioFemale.checked = false;
      checkJavascript.checked = false;
      checkHtml.checked = false;
      checkCss.checked = false;
      selectCity.value = 0;
   }
});
