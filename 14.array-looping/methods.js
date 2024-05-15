const users = ["theo", "naruto", "doraemon", "nobita", "sasuke", "iay"];
// for (let i = 0; i < users.length; i++) {
//   const currentUsername = users[i];
//   if (currentUsername.length < 5){
//     console.log("username under 5 characters: " + currentUsername);
//   }
// }

// users.forEach((username, index) =>{
//   // if (username.length < 5){
//   //   console.log("username under 5 characters: " + username);
//   // }
//   console.log(`Index: ${index} | username: ${username}`); 
// })

// const findUsername = users.find((username) => {
//   return username.length === 8;
// })
// console.log(findUsername);

// const filteredUsers = users.filter((username) =>{
//   return username.length > 4;
// })
// console.log(filteredUsers);


// const mappedUsers = users.map((username) => {
//   return username;
// })
// console.log(mappedUsers);

const numbers = ["1", "20", "14", "7"];
const convertedNumbers = numbers.map((value) =>{
  return Number(value);
})
console.log(convertedNumbers);