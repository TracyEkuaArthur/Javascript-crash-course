let firstName = "Tracy";
let lastName = "Arthur";
let age = 30;

console.log(firstName);
console.log(lastName);
console.log(age);

console.log(
  "My name is " + firstName + " " + lastName + " I am " + age + " years old"
);
console.log(`My name is $(firstName) $(lastName).I am ${age} years old.`);

let fruits = ["Mango", "Apple", "Orange", "Grapes"];
console.log(fruits);
fruits.push("food");
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift("pear");
console.log(fruits);

fruits.shift();
console.log(fruits);

let answer = fruits.includes("Apple");
console.log(answer);

