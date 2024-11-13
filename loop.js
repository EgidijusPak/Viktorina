for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

for (let i = 10; i > 0; i--) {
  console.log(i + 1);
}

for (let i = 0; i < 10; i += 2) {
  console.log(i + 1);
}

for (let i = 1; i < 10; i++) {
  console.log(i * 2);
}

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

for (let i = 0; i < 11; i++) {
  if (i == 7) {
    continue;
  }
  console.log(i);
}

const leFamily = {
  me: 33,
  father: 55,
  mother: 53,
  sister: 32,
  brother1: 28,
  brother2: 25,
  aunt: 61,
  uncle: 60,
  causin1: 37,
  causin2: 37,
  grandfather1: 79,
  grandmother1: 77,
  grandmother2: 81,
  grandfather2: 81,
  cat: 3,
  dog: 3,
  parrot: 2,
};
let kiek = 0;
for (let key in leFamily) {
  if (leFamily[key] > 65) {
    kiek++;
  }
}
console.log(kiek);
let lyg = 0;
let nelyg = 0;

for (let key in leFamily) {
  if (leFamily[key] % 2 == 1) {
    nelyg++;
  } else {
    lyg++;
  }
}
console.log(nelyg, lyg);

let summa = 0;
const numbers = [2, 34, 54, 67, 77, 1, 99];
for (el of numbers) {
  summa += el;
}
console.log(summa);

const words = ["Geros", "dienytes", "skanios", "kavytes"];

let letterCount = 0;
for (el of words) {
  for (leter of el) {
    letterCount++;
  }
  console.log(
    el + " Zodzio ilgis " + letterCount + " lenght ilgis " + el.length
  );
}

let skaicius = 1;

// while (skaicius < 10) {
//   console.log(skaicius);
//   skaicius++;
// }

// while (skaicius >= 1) {
//   console.log(skaicius);
//   skaicius--;
// }

// while (skaicius <= 10) {
//   if (skaicius % 2 == 1) {
//     console.log(skaicius);
//   }
//   skaicius++;
// }
// let num = 0;
// let vid = 0;
// let i = 0;

// do {
//   num = Number(prompt("Iveskite skaiciu"));
//   if (num < 0) {
//     break;
//   }
//   i++;
//   vid += num;
// } while (num > 0);
// console.log(vid / i);

// num = 0;
// let rand = Math.floor(Math.random() * (10 - 1) + 1);
// let gue = false;
// do {
//   num = Number(prompt("Spekite skaiciu"));
//   if (rand === num) {
//     alert(`Atspejote skaiciu ${num}`);
//     gue = true;
//   } else if (rand < num) {
//     alert("Spetas sakicius didesnis uz spejama skaiciu");
//   } else {
//     alert("Spetas skaicius mazesnis uz spejama skaiciu");
//   }
// } while (gue == false);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
for (let i = 0; i < 10; i++) {
  console.log(i * i);
}
for (let i = 10; i < 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// num = Number(prompt("Iveskite skaiciu"));

// for (let i = 0; i <= num; i++) {
//   console.log(i);
// }

let a = 7;
let b = 16;
while (a <= b) {
  console.log(a);
  a++;
}

let n = 8;
for (let i = 0; i < n; i++) {
  console.log("Egidijus");
}

num = 0;
// while (true) {
//   num = Number(prompt("Iveskite skaiciu"));
//   if (num <= 10 && num >= 1) {
//     for (let i = 0; i <= 10; i++) {
//       console.log(num * i);
//     }
//     break;
//   } else {
//     continue;
//   }
// }

for (let x = -10; x <= 10; x++) {
  let ats = 7 * 2 + 5 * x - 3;
  console.log(`Funkcija y =7*2+ 5*x -3, kai x = ${x}, tai atsakimas: ${ats}`);
}

// n = Number(prompt("Iveskite kiek egluciu yra uredijoje"));
// let avarage = 0;
// for (let i = 0; i <= n; i++) {
//   let e = Number(prompt("Iveskite egluciu aukscius"));
//   avarage += e;
// }
// avarage /= n;
// console.log(avarage);
//////////////////////////////////////////

const mass = [10, 3, 6, 87, 8, 54, 5];

for (let el of mass) {
  console.log(el);
}

sum = 0;

for (let el of mass) {
  sum += el;
}
console.log(sum);
console.log(
  mass.reduce(function (a, b) {
    return a + b;
  }, 0)
);
sum = 0;
mass.forEach((item) => {
  sum += item;
});
console.log(sum);

let sentence = "Labas ate prie po is ko prie as tu ir";
const word = sentence.split(" ");
const firstA = [];
const secondA = [];
let sen1 = "";
let sen2 = "";

for (let i = 0; i < word.length; i++) {
  if (i % 2 == 0) {
    firstA.push(word[i]);
    sen1 += word[i] + " ";
  } else {
    secondA.push(word[i]);
    sen2 += word[i] + " ";
  }
}

console.log(sen1);
console.log(sen2);

let min = mass[0];
let place = 0;
for (let i = 0; i <= mass.length; i++) {
  if (mass[i] < min) {
    min = mass[i];
    place = i;
  }
}
mass.splice(place + 1, 3);
console.log(mass);

const cars = ["bmw", "audi", "mercedes"];

if (cars.indexOf("bentley") == -1) {
  cars.push("bentley");
}
console.log(cars);

const prekes = [
  "pienas",
  "kiausiniai",
  "surelis",
  "batonas",
  "bandeles",
  "surelis",
  "kiausiniai",
  "batonas",
];

const uniqueArray = prekes.filter(
  (value, index, self) => self.indexOf(value) === index
);

console.log(uniqueArray);

const vaisiai = [
  "bananas",
  "obuolys",
  "kriause",
  "bananas",
  "arbuzas",
  "mandarinas",
  "mandarinas",
  "obuolys",
];
const uniqueVai = [];

for (let el of vaisiai) {
  if (uniqueVai.includes(el) == false) {
    uniqueVai.push(el);
  }
}
console.log(uniqueVai);

const numbers1 = [12, 15, 16, 985, 75, 32, 12, 156];
const names = ["Jonas", "Petras", "Antanas"];

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 == 0) {
    let rngInt = Math.floor(Math.random() * (names.length - 0)) + 0;
    numbers1[i] = names[rngInt].toUpperCase();
  }
}
console.log(numbers1);

let duomenys = {
  id: "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  topping: [
    { id: "5001", type: "None" },
    { id: "5002", type: "Glazed" },
    { id: "5005", type: "Sugar" },
    { id: "5007", type: "Powdered Sugar" },
    { id: "5006", type: "Chocolate with Sprinkles" },
    { id: "5003", type: "Chocolate" },
    { id: "5004", type: "Maple" },
  ],
};

for (let i = 0; i < duomenys.topping.length; i++) {
  console.log(`id: ${duomenys.topping[i].id}`);
  console.log(`type: ${duomenys.topping[i].type}`);
}

for (let i = 0; i < duomenys.topping.length; i++) {
  console.log(
    `id: ${duomenys.topping[i].id}, type: ${duomenys.topping[i].type}`
  );
}
let family = {
  gradparents: {
    grandma: "Marge",
    grandpa: "Homer",
  },
  parents: {
    mom: "Lisa",
    dad: "Millhouse",
  },
  children: {
    daughter: "Anne",
    son1: "Peter",
    son2: "Bob",
  },
};

for (let el in family) {
  console.log(`${el}: ${Object.values(family)}`);
}

let knygos = [
  {
    isbn: 9786098233346,
    price: 7.99,
    year: 2006,
    title: "Bloga dukte",
    pagecount: 250,
  },
  {
    isbn: 9786098233391,
    price: 7.99,
    year: 2015,
    title: "Mergina kuria jis pazinojo",
    pagecount: 315,
  },
  {
    isbn: 9786099609324,
    price: 7.99,
    year: 2019,
    title: "Tapk ragana",
    pagecount: 150,
  },
  {
    isbn: 9786094792250,
    price: 6.99,
    year: 2007,
    title: "Sfera",
    pagecount: 450,
  },
  {
    isbn: 9786094792335,
    price: 9.99,
    year: 2019,
    title: "Mes susitinkame cia",
    pagecount: 500,
  },
  {
    isbn: 9786094273780,
    price: 7.99,
    year: 2019,
    title: "Sunaikinimas",
    pagecount: 509,
  },
  {
    isbn: 9786098233483,
    price: 12.99,
    year: 2018,
    title: "Artemide",
    pagecount: 199,
  },
  {
    isbn: 9786094273872,
    price: 4.99,
    year: 2015,
    title: "Fondas ir imperija",
    pagecount: 185,
  },
  {
    isbn: 9786094273902,
    price: 7.99,
    year: 2019,
    title: "Amzinybes fjordo pranasai",
    pagecount: 333,
  },
  {
    isbn: 9786094442742,
    price: 5.99,
    year: 2004,
    title: "Bejegiai",
    pagecount: 777,
  },
  {
    isbn: 9786094442940,
    price: 14.99,
    year: 2019,
    title: "Klajunai",
    pagecount: 172,
  },
  {
    isbn: 9786090404386,
    price: 7.99,
    year: 2015,
    title: "Mergina, kuri pakliuvo i voratinkli",
    pagecount: 356,
  },
];

for (let i = 0; i < knygos.length; i++) {
  console.log(`isbn --> ${knygos[i].isbn}`);
  console.log(`year --> ${knygos[i].year}`);
  console.log(`price --> ${knygos[i].price}`);
  console.log(`title --> ${knygos[i].title}`);
  console.log(`pagecount --> ${knygos[i].pagecount}`);
}

const recentBooks = [];
for (let element in knygos) {
  if (knygos[element].year >= 2015) {
    recentBooks.push(knygos[element].title);
  }
}
console.log(`${recentBooks}`);

function arbata(fam) {
  if (fam <= 50) {
    tip = fam * 0.2;
    sum = fam + tip;
    console.log(`Reikes palikti ${tip} e ir visa suma bus ${sum}`);
  } else if (fam > 50 && fam <= 200) {
    tip = fam * 0.15;
    sum = fam + tip;
    console.log(`Reikes palikti ${tip} e ir visa suma bus ${sum}`);
  } else {
    tip = fam * 0.1;
    sum = fam + tip;
    console.log(`Reikes palikti ${tip} e ir visa suma bus ${sum}`);
  }
  return sum, tip;
}

let firstF = 201;
let secondF = 37;
let thirdF = 98;

arbata(firstF);
arbata(secondF);
arbata(thirdF);

const questions1 = [
  {
    id: 1,
    question: "Kuri HTML versija yra naudojama šiuo metu?",
    answers: [
      { text: 2, isCorrect: false },
      { text: 5, isCorrect: true },
      { text: 7, isCorrect: false },
      { text: 3, isCorrect: false },
      { text: 8.3, isCorrect: false },
    ],
  },
  {
    id: 2,
    question:
      "Kokį HTML semantinį elementą parinktumėte tinklapio naujienai aprašyti?",
    answers: [
      { text: "<news>", isCorrect: false },
      { text: "<article>", isCorrect: true },
      { text: "<section>", isCorrect: false },
      { text: "<main>", isCorrect: false },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Kokią display reikšmę turi HTML a elementas pagal nutylėjimą?",
    answers: [
      { text: "inline", isCorrect: true },
      { text: "block", isCorrect: false },
      { text: "inline-block", isCorrect: false },
      { text: "table", isCorrect: false },
    ],
  },
  {
    id: 4,
    question:
      "Kuris selektorius yra teisingas norint stilių taikyti tik pdf failams?",
    answers: [
      { text: "a[href >='.pdf']", isCorrect: false },
      { text: "a[href $='.pdf']", isCorrect: false },
      { text: "a[href only ='.pdf']", isCorrect: false },
      { text: "a[href='.pdf']", isCorrect: true },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  {
    id: 5,
    question:
      "Kokią klasę reikia priskirti HTML blokui, kad jis Bootstrap grid'e užimtų 5 stulpelius praleidžiant vieną stulpelį?",
    answers: [
      { text: ".columns-5-offset-1", isCorrect: false },
      { text: ".col-sm5-1", isCorrect: false },
      { text: ".col-sm-5 .col-offset-1", isCorrect: false },
      { text: ".col-sm-5 .col-sm-offset-1", isCorrect: true }, // ar tikrai?
    ],
  },
  {
    id: 6,
    question:
      "Kaip kintamajam antraste, kuriam priskirtas HTML elementas header pakeisti fono spalvą naudojant JavaScript?",
    answers: [
      { text: "antraste.style.background-color = 'tomato';", isCorrect: false },
      { text: "antraste.style.backgroundColor = 'tomato';", isCorrect: true },
      { text: "antraste.css.background-color= 'tomato';", isCorrect: false },
      { text: "Teisingo atsakymo nėra", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "Kaip importuoti išorinį scss failą į pagrindinį scss failą?",
    answers: [
      { text: "@include isorinis_failas", isCorrect: false },
      { text: "@add isorinis_failas", isCorrect: false },
      { text: "@import isorinis_failas", isCorrect: true },
      { text: "Nėra teisingo varianto", isCorrect: false },
    ],
  },
  {
    id: 8,
    question:
      "Kaip padaryt nuorodą į tėvinį html elementą a su tikslu aprašyti pseudo klasės :hover formatavimą?",
    answers: [
      { text: "extend a:hover", isCorrect: false },
      { text: "into a:hover", isCorrect: false },
      { text: "&:hover", isCorrect: true },
      { text: "@:hover", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "Kuris iš sąrašo nėra preprocesorius?",
    answers: [
      { text: "Ruby", isCorrect: true },
      { text: "SASS", isCorrect: false },
      { text: "LESS", isCorrect: false },
      { text: "Stylus", isCorrect: false },
      { text: "Nėra teisingo varianto", isCorrect: false },
    ],
  },
  {
    id: 10,
    question:
      "Kaip pasirinkti header elementą ir jį paslėpti naudojant jQuery?",
    answers: [
      { text: "$('header').diplayNone();", isCorrect: false }, //nezinau
      { text: "$('header').hide();", isCorrect: true },
      { text: "$('header').hideIt();", isCorrect: false },
      { text: "Nėra teisingo atsakymo.", isCorrect: false },
    ],
  },
  {
    id: 11,
    question: "Kokią template sistemą naudoja Drupal 8?",
    answers: [
      { text: "HTML", isCorrect: false },
      { text: "Smarty", isCorrect: false },
      { text: "Twig", isCorrect: true },
      { text: "PHP", isCorrect: false },
      { text: "Nėra teisingo varianto", isCorrect: false },
    ],
  },
  {
    id: 12,
    question: "Kuo skiriasi kintamieji let nuo var ?",
    answers: [
      { text: "Nesiskiria", isCorrect: false },
      {
        text: "Var yra globalus kintamasis naudojamas visoje funkcijoje, o let yra vietinis kintamasis, naudojamas blokuose",
        isCorrect: true,
      },
      {
        text: "Var kintamasis yra skirtas tik tekstiniams kintamiesiams aprašyti, o let numerių kintamiesiems",
        isCorrect: false,
      },
      {
        text: "Var naudojamas tuomet kai kintamojo ilgis ne didesnis nei 5 simboliai, o let, kuomet daugiau nei 5",
        isCorrect: false,
      },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  {
    id: 13,
    question: "Kam naudojamas 'use strict'?",
    answers: [
      {
        text: "‘Use strict’ naudojimas apsaugo neleisdamas atlikti tam tikrų veiksmų ir suteikia daugiau išimčių",
        isCorrect: false,
      },
      {
        text: "Užkerta kelią klaidoms kai atliekami palyginti “nesaugūs” veiksami",
        isCorrect: false,
      },
      {
        text: "Išjungia painias ir blogai apgalvotas funkcijas",
        isCorrect: false,
      },
      { text: "Visi atsakymai tesisingi", isCorrect: true },
      { text: "Nėra teisingo atsakymo", isCorrect: false },
    ],
  },
  // {
  //   id: 14,
  //   question: "Kodėl CSS vadinami pakopiniais stiliais?",
  //   answers: [
  //     { text: "Kodas rašomas pakopomis", isCorrect: false },
  //     {
  //       text: "Pakopos nusako, kuri taisyklė yra svarbesnė ir bus taikoma elementui",
  //       isCorrect: true,
  //     },
  //     {
  //       text: "Įjungus CSS pakopas, galima naudoti !important",
  //       isCorrect: false,
  //     },
  //     { text: "Teisingo atsakymo nėra", isCorrect: false },
  //   ],
  // },
  // {
  //   id: 15,
  //   question: "Koks metodas naudojamas, norint sužinoti masyvo ilgį JS?",
  //   answers: [
  //     { text: "count", isCorrect: false },
  //     { text: "length", isCorrect: true },
  //     { text: "valueOf", isCorrect: false },
  //     { text: "Nėra teisingo atsakymo", isCorrect: false },
  //   ],
  // },
  // {
  //   id: 16,
  //   question: "Kiek laiko duomenys saugomi local storage?",
  //   answers: [
  //     { text: "Iki perkraunant puslapį", isCorrect: false },
  //     { text: "Vieną parą", isCorrect: false },
  //     { text: "Vieną mėnesį", isCorrect: false },
  //     { text: "Metus laiko", isCorrect: false },
  //     { text: "Neturi galiojimo laiko", isCorrect: true },
  //   ],
  // },
  // {
  //   id: 17,
  //   question:
  //     "let kiekis = 12; \n" +
  //     "console.log(++kiekis); \n" +
  //     "Ką išves konsolėje?",
  //   answers: [
  //     { text: "undefined", isCorrect: false },
  //     { text: "12", isCorrect: false },
  //     { text: "13", isCorrect: true },
  //     { text: "Nieko", isCorrect: false },
  //   ],
  // },
  // {
  //   id: 18,
  //   question: "Koks metodas naudojamas eilutės duomenis konvertuoti į masyvą?",
  //   answers: [
  //     { text: "shift()", isCorrect: false },
  //     { text: "pop()", isCorrect: false },
  //     { text: "splice()", isCorrect: false },
  //     { text: "split()", isCorrect: true },
  //   ],
  // },
  // {
  //   id: 19,
  //   question:
  //     "function sveikas(){ \n" +
  //     ' let vardas="Jonas" \n' +
  //     "console.log(vardas)\n" +
  //     "} \n" +
  //     "sveikas();\n" +
  //     "Ką atspausdins konsolėje?",
  //   answers: [
  //     { text: "Jonas", isCorrect: true },
  //     { text: "vardas", isCorrect: false },
  //     { text: "sveikas", isCorrect: false },
  //     { text: "undefined", isCorrect: false },
  //     { text: "nieko", isCorrect: false },
  //   ],
  // },
  {
    id: 20,
    question: "Kaip apibrėžiamas SASS kintamasis vardu spalva?",
    answers: [
      { text: "const sass spalva;", isCorrect: false },
      { text: "const spalva;", isCorrect: false },
      { text: "let spalva;", isCorrect: false },
      { text: "$spalva string", isCorrect: false },
      { text: "$spalva", isCorrect: true },
    ],
  },
];
for (let i = 0; i < questions1.length; i++) {
  for (let j = 0; j < questions1[i].answers.length; j++) {
    if (questions1[i].answers[j].isCorrect === true) {
      console.log(`${questions1[i].id}. ${questions1[i].question}`);
      console.log(`${questions1[i].answers[j].text}`);
    }
  }
}

let allAnswer = "";
let answerNum = "";
let teisingas = "";
let right = 0;
let wrong = 0;
let visiKlau = [];
for (let i = 0; i < questions1.length; i++) {
  for (let j = 0; j < questions1[i].answers.length; j++) {
    answerNum = (j + 1).toString();
    allAnswer += answerNum + ". " + questions1[i].answers[j].text + "\n";
    if (questions1[i].answers[j].isCorrect === true) {
      teisingas = (j + 1).toString();
    }
    visiKlau.push((j + 1).toString());
  }

  while (true) {
    answer = prompt(
      `${questions1[i].id}. ${questions1[i].question}\n${allAnswer}`
    );
    if (answer == teisingas) {
      right++;
      alert("Teisingai!");
      break;
    } else if (visiKlau.includes(answer)) {
      wrong++;
      alert("Neteisingai!");
      break;
    } else {
      alert("Neteisingai ivestas atsakimo pasirinkimas!");
      continue;
    }
  }

  allAnswer = "";
}
if (right >= 10) {
  alert(
    `Is 20 klausimu teisingai atsakei: ${right} ir sveikiname atsakius daugiau nei 50% atsakymu`
  );
} else {
  alert(`Is 20 klausimu teisingai atsakei: ${right}`);
}
