// for (let i = 0; i < 5; i++){
//   console.log(i);
// }

// let i = 0;
//   while (i < 10) {
//     console.log(i++);
//     if (i===5) {
//         break;
//     }
//   }

// let i = 10
// do {
//   console.log(i)
//   i++
// } while (i < 5)


// for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i %2) {
//         console.log("ini habis dibagi 2");
//         i++; 
//     }
// }


let pager = 5;

for (let i = 1; i <= pager; i++) {
    let str = '';
    for (let j = 0; j < pager - i; j++) {
        str += ' ';
    }
    for (let k = 0; k < (2 * i - 1); k++) {
        str += '#';
    }
    console.log(str);
}
