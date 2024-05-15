// function sayHello() {
//   console.log("Hello world!");
// }
// sayHello();

// function greetUser(username, age){
//   if(typeof username === 'string' && typeof age === 'number'){
//     console.log(`Hello, ${username}`);
//     console.log(`You are ${age} years old`);
//   }
// }
// greetUser("iay", 25)

// // default age
// function greetUser(username, age = 0) {
//   console.log(`Hello, ${username}`);
//   console.log(`You are ${age} years old`);
// }
// greetUser("iay");

// function repeatGreetings(numberOfTimes = 0){
//   for (let i = 0; i < numberOfTimes; i++){
//     console.log("Hello");
//   }
// }
// repeatGreetings(5);

// function greeting(){
//   return 123;
// }
// console.log(greeting() + 7)

function add(x = 0, y = 0){
  return x + y;
}
function divide(x, y){
  return x / y;
}
console.log(add(8,4) + divide(5, 10));