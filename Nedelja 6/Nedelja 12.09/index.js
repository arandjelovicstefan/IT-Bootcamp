const listaVisual = document.getElementById("lista");
const tbody = document.querySelector("tbody");

class ProductGroup {
   constructor(title, vat) {
      this.title = title;
      this.vat = vat;
   }
   set title(input) {
      let text = input.trim();
      if (text != "") {
         this._title = text;
      }
   }

   get title() {
      return this._title;
   }
}

class Product {
   constructor(title, price, barcode, group) {
      this.title = title;
      this.price = price;
      this.barcode = barcode;
      this.group = group;
   }
   set title(input) {
      let text = input.trim();
      if (text != "") {
         this._title = text;
      }
   }

   get title() {
      return this._title;
   }
}

class ShoppingCart {
   static items = [];

   static addProduct(product, quantity = 1) {
      ShoppingCart.items.forEach(item => {
         if (item.product._title == product._title) {
            item.quantity += quantity;
         }
      });

      let findItem = ShoppingCart.items.find(item => item.product._title == product._title);
      if (!findItem) {
         let newItem = new ShoppingCartItem(product, quantity);
         ShoppingCart.items.push(newItem);
      }
   }
}

class ShoppingCartItem {
   product;
   quantity;
   constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
   }
}

class Checkout {
   static printCheck(shoppingCart) {
      let vat = 0;
      let total = 0;
      shoppingCart.forEach(item => {
         let newTr = document.createElement("tr");
         newTr.innerHTML = `
        <th style="width: 300px">${item.product.group._title}</th>
        <th style="width: 300px">${item.product._title}</th>
        <th style="width: 300px">${item.product.price}</th>
        <th style="width: 300px">${item.quantity}</th>
        <th style="width: 300px">${item.product.group.vat}</th>
        <th style="width: 300px">${item.product.price * item.quantity}</th>
  `;
         listaVisual.append(newTr);
         vat += Number(item.product.group.vat);
         total += Number(item.product.price * item.quantity);
      });
      tbody.innerHTML = `<br>VAT/TOTAL ${vat}/${total}`;
   }
}

let mlecniProizvod = new ProductGroup("Mlecni proizvod", 20);
let kucniAparat = new ProductGroup("Kucni aparat", 30);
let tehnika = new ProductGroup("Tehnika", 15);
let alkoholnaPica = new ProductGroup("Alkoholno pice", 25);

let mleko = new Product("Mleko", 100, 42343434, mlecniProizvod);
let tv = new Product("TV", 15000, 4657575, tehnika);
let laptop = new Product("Laptop", 85000, 131242, tehnika);
let mikser = new Product("Mikser", 3000, 929148, kucniAparat);
let sokovnik = new Product("Sokovnik", 5000, 903874, kucniAparat);
let pivo = new Product("Pivo", 55, 983278, alkoholnaPica);

ShoppingCart.addProduct(tv, 10);
ShoppingCart.addProduct(laptop, 7);
ShoppingCart.addProduct(mikser, 12);
ShoppingCart.addProduct(sokovnik, 4);
ShoppingCart.addProduct(pivo, 42);

ShoppingCart.addProduct(mleko, 5);
ShoppingCart.addProduct(mleko, 5);
ShoppingCart.addProduct(mleko, 5);
ShoppingCart.addProduct(mleko, 5);
ShoppingCart.addProduct(mleko, 5);

Checkout.printCheck(ShoppingCart.items);

console.log(ShoppingCart.items);
