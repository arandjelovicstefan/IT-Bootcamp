import { data, add, deleteById, changeById } from "/service.js";

const inputDesc = document.getElementById("inputDesc");
const checkDone = document.getElementById("checkDone");
const submitBtn = document.querySelector(".submit");

const changeInput = document.getElementById("inputChange");
const getID = document.getElementById("inputId");
const changeCheck = document.getElementById("newCheckDone");
const changeSubmitBtn = document.querySelector(".newSubmit");

const visualInput = document.querySelector(".todoList");

let count1 = 5;

const dataIspis = () => {
   data.forEach(element => {
      const p = document.createElement("p");
      p.innerHTML = `
      id: ${element.id}<br />
      Description: ${element.desc}<br />
      Done: ${element.done}`;

      if (element.done == true) {
         p.classList.add("precrtano");
      }
      const btn = document.createElement("button");
      btn.textContent = "obrisi";

      btn.addEventListener("click", () => {
         btn.remove();
         p.remove();
         deleteById(element.id);
         console.log(data);
      });
      visualInput.append(p, btn);
   });
};

dataIspis();

submitBtn.addEventListener("click", event => {
   event.preventDefault();
   if (inputDesc.value.length > 0) {
      const p = document.createElement("p");
      p.innerHTML = `
      id: ${count1}<br />
      Description: ${inputDesc.value}<br />
      Done: ${checkDone.checked}`;

      if (checkDone.checked == true) {
         p.classList.add("precrtano");
      }

      let item = {
         desc: inputDesc.value,
         done: checkDone.checked,
         id: count1++,
      };
      add(item);
      console.log(data);

      const btn = document.createElement("button");
      btn.textContent = "obrisi";

      btn.addEventListener("click", () => {
         btn.remove();
         p.remove();
         deleteById(item.id);
         console.log(data);
      });
      visualInput.append(p, btn);

      checkDone.checked = false;
      inputDesc.value = "";
   }
});

changeSubmitBtn.addEventListener("click", event => {
   event.preventDefault();
   if (changeInput.value.length > 0 && Number(getID.value) <= data.length) {
      let item = {
         id: getID.value,
         desc: changeInput.value,
         done: changeCheck.checked,
      };

      changeById(getID.value, item);
      console.log(data);

      visualInput.innerHTML = "";
      data.forEach;
      dataIspis();
      changeCheck.checked = false;
      changeInput.value = "";
      getID.value = "";
   }
});
