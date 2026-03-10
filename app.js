// 1-Masala.

// let harf = prompt("Matn kiritin")
// let son = harf.length;
// console.log("Harflar soni", son);

// 2-Masala.

// let harf = prompt("Matn kiriting")
// let son = harf[harf.length -1];
// console.log("Ohirgi harf", son);

// 3-Masala.

// let matn = prompt("Matn kiritin")
// let boshharf = matn[0].toUpperCase();
// let harf = matn.slice(1);
// console.log(boshharf + harf);

// 4-Masala.

// let matn = prompt("Matn kiriting:");
// let sanoq = 0;

// for (let i = 0; i < matn.length; i++) {
//   if (matn[i] === "a") {
//     sanoq++;
//   }
// }
// console.log(sanoq);

// 5-Masala.

// let matn = prompt("Matn kiriting:");
// let kattamatn = matn.toUpperCase();
// console.log(kattamatn);

// 6-Masala.

// let matn = prompt("Matn kiritin")
// let kichikharf = matn.toLowerCase();
// console.log(kichikharf)

// 7-Masala.

// let matn = prompt("Matn kiriting:");
// let natija = matn.includes("js");
// console.log(natija);

// 8-Masala.

// let matn = prompt("Matn kiriting:");
// let beshta = matn.slice(0, 5);
// console.log(beshta);

// 9-Masala.

// let matn = prompt("Matn kiriting:");
// let harf = matn.slice(-3);
// console.log(harf);

// 10-Masala.

// let matn = prompt("Matn kiriting:");
// let joylar = 0;

// for (let i = 0; i < matn.length; i++) {
//   if (matn[i] === " ") {
//     joylar++;
//   }
// }
// console.log(joylar);

// 11-Masala.

// let matn = prompt("Matn kiriting:");
// let son = 0;

// for (let i = 0; i < matn.length; i++) {
//   if ("aeiou".includes(matn[i])) {
//     son++;
//   }
// }
// console.log(son);

// 12-Masala.

// let matn = prompt("Matn kiriting:");
// let sanoq = 0;

// for (let i = 0; i < matn.length; i++) {
//   let harf = matn[i].toLowerCase();
//   if (harf >= "a" && harf <= "z" && !"aeiou".includes(harf)) {
//     sanoq++;
//   }
// }
// console.log(sanoq);

// 13-Masala.

// let matn = prompt("Matn kiriting:");
// let teskarimatn = matn.split("").reverse().join("");
// console.log(teskarimatn);

// 14-Masala.

// let matn = prompt("Matn kiriting:");
// let harf = matn.toLowerCase();
// let matnlar = harf.split("").reverse().join("");
// let natija = harf === matnlar;
// console.log(natija);

// 15-Masala.

// let matn = prompt("Matn kiriting:");
// let gmail = matn.replaceAll("a", "@");
// console.log(gmail);

// 16-Masala.

// let matn = prompt("Matn kiriting:");
// let sanoq = matn.split("javascript").length - 1;
// console.log(sanoq);

// 17-Masala.

// let matn = prompt("Matn kiriting:");
// let son = matn.replace(/[0-9]/g, "");
// console.log(son);

// 18-Masala.

// let matn = prompt("Matn kiriting:");

// let sozlar = matn.split(" ");

// let uzun = "";

// for (let i = 0; i < sozlar.length; i++) {
//   if (sozlar[i].length > uzun.length) {
//     uzun = sozlar[i];
//   }
// }
// console.log(uzun);

// 19-Masala.

// let matn = prompt("Matn kiriting:");
// let natija = matn.split("").join("-");
// console.log(natija);

// 20-Masala.

// let matn = prompt("Matn kiriting:");
// let natija = matn.replace(/[aeiouAEIOU]/g, "*");
// console.log(natija);