const array = Array(30)
  .fill(0)
  .map(() => Math.floor(Math.random() * (25 - 5 + 1) + 5));
console.log(array);

const el = [16, 7, 10, 20, 3];
let kiek = 0;
el.forEach((x) => {
  if (x > 10) {
    ++kiek;
  }
});
console.log(kiek);

const max = el.reduce((a, b) => Math.max(a, b), -Infinity);

console.log(max, el.indexOf(max) + 1);

let sum = 0;
el.forEach((num) => {
  if (num % 2 == 0) {
    sum += num;
  }
});
console.log(sum);

const MaxVal = Math.max(...array);

const maxIndices = array.reduce((x, el, index) => {
  if (el === MaxVal) {
    x.push(index);
  }
  return x;
}, []);
console.log(maxIndices);

const array2 = Array(10)
  .fill(0)
  .map(() => Math.floor(Math.random() * (25 - 5 + 1) + 5));

array.concat(array2);
console.log(array);

const raides = ["A", "B", "C", "D"];

const randA = Array(200)
  .fill(0)
  .map(() => raides[Math.floor(Math.random() * raides.length)]);
console.log(randA);

// let A = 0;
// let B = 0;
// let C = 0;
// let D = 0;

// console.log(
//   `A raides yra: ${A}, B raides yra: ${B}, C raides yra: ${C}, D raides yra: ${D}`
// );

const mas1 = Array(100)
  .fill(0)
  .map(() => Math.floor(Math.random() * (999 - 100 + 1) + 100));
const mas2 = Array(100)
  .fill(0)
  .map(() => Math.floor(Math.random() * (999 - 100 + 1) + 100));

console.log(mas2);

let book = {
  author: "George Orwell",
  title: "Gyvuliu ukis",
};
function text(obj) {
  console.log(
    `Sis autorius ${obj.author} parase labai isimintina ir idome knyga${obj.title}`
  );
  return `Sis autorius ${obj.author} parase labai isimintina ir idome knyga${obj.title}`;
}

text(book);
let properties = Object.keys(book).length;
console.log(properties);
