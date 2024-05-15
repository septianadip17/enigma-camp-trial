const users = ["theo", "naruto", "doraemon", "nobita", "sasuke", "sopian"];
// user.length = 6
for (let i = 0; i < users.length; i++) {
  const currentUsername = users[i];
  if (currentUsername.length < 5){
    console.log(`${currentUsername} username's is under 5 charcters`);
  }else{
    console.log(`${currentUsername} username's is above 5 charcters`);
  }

  // console.log(`Hello, ${currentUsername}`);
  // console.log(users[i]);
}


// https://www.w3schools.com/js/js_array_iteration.asp