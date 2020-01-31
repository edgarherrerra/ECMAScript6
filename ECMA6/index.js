// DEFAULT PARAMS || Before ECMA6 
function newFunction(name, age, country) {
  var name = name || 'Edgar'
  var age = age || '22'
  var country = country || 'WORLD'

  console.log(name, age, country);
}

// DEFAULT PARAMS  || ECMA6
function newFunction2(name = "Edgar", age = "22", country = "WORLD") {
  console.log(name, age, country);
}

newFunction2("Peter", "23", "WORLD");


// String Concatenation || Before ECMA6 

let hi = "hi";
let there = "there";

let hithere = hi + ' ' + there;

// String Concatenation || ECMA6 

let hithere2 = `${hi} ${there}`;

console.log(hithere, hithere2);

// Multiline || Before ECMA6 
let lorem = "Lorem Khaled Ipsum is a major key to success. \n"
  + "Special cloth alert, cut from a special cloth."

// Multiline || ECMA6
let lorem2 = `Lorem Khaled Ipsum is a major key to success.
I’m giving you cloth talk, cloth. 
Special cloth alert, cut from a special cloth.
`;

console.log(lorem);
console.log(lorem2);

// Destructuring || Before ECMA6 
let person = {
  name: 'Edgar',
  age: 22,
  country: 'WORLD'
}

console.log(person.name, person.age);

// Destructuring || ECMA6 
let { name, age, country } = person;

console.log(name, age, country);


let team1 = ['Peter', 'Andy', 'Josh'];
let team2 = ['Sarah', 'Marc', 'Ana'];

let education = ['David', ...team1, ...team2];

console.log(education);

// Param objects || Before ECMA6 
obj = { name: name, age: age };

// Param objects || ECMA6
obj2 = { name, age };
console.log(obj2);

// Arrow functions || Before ECMA6.
const names = [
  { name: 'Edgar', age: 22 },
  { name: 'Sarah', age: 25 }
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
})

// Arrow functions || ECMA6.
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  console.log(name, age, country);
}

const listOfNames4 = name => {
  console.log(name);
}

const square = num => num * num;

// Promises  || ECMA 6.
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));


