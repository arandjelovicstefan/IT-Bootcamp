/**--------------------
Nacrtati dijamant kao na primeru:

     *
    ***
   *****
  *******
 *********
  *******
   *****
    ***
     *


 ---------------------*/

for (let i = 0; i < 4; i++) {
   console.log(" ".repeat(4 - i) + "*".repeat(i) + "*" + "*".repeat(i) + " ".repeat(4 - i));
}
for (let i = 4; i >= 0; i--) {
   console.log(" ".repeat(4 - i) + "*".repeat(i) + "*" + "*".repeat(i) + " ".repeat(4 - i));
}
