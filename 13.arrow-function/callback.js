// const processor = (callback) => {
//   callback();
// }
// const greeting = () => {
//   console.log("Hello world!");
// };
// const goodbye = () => {
//   console.log("Goodbye!");
// };
// processor(greeting);
// processor(goodbye);

// const calculate = (x,y,callback) => {
//   callback(x,y)
// };
// const sum = (a,b) => {
//   console.log(a + b);
// };


const calculate = (x, callback) => {
  return callback(x);
};
const upperString = (text = "") => text.toUpperCase();
const getFirstLetter = (text = "") => text.charAt(0);

console.log(calculate("naruto", upperString));
console.log(calculate("naruto", getFirstLetter));