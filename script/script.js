// const book = {
//   title: "Jack and the bean stalk",
//   author: { name: "JosephJack" },
//   pages: 20,
//   isPublished: true,
// };
// console.log(book.title);
// console.log(book.author.name);
// console.log("Title:", book.title);

// const colors = ["red", "yellow", "purple", "blue", "green"];
// console.log(colors);

function sayHello() {
  console.log("Hello");
}
sayHello();

function world() {
  console.log("world");
}
world();

//function expression/we call the variable name
let hello = function () {
  console.log("hello");
};
hello();

//Arrow function
// let greeting = () => {
//   console.log("Hello1");

// Hello1();

let add = (x, y) => {
  return x + y;
};
console.log(add(3, 6));

// Anonymous function

hello(function () {
  console.log("Anonymous");
});
