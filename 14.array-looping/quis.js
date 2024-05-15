// function nameArray(value) {
//   const nameIndx = value.map((newName)=>newName[0]);
//   return nameIndx;
// }

// console.log(nameArray(["budi","dayat","hamid","dodi","farhan"]));

// function nameArray(value) {
//   const nameIndx = value.filter((newName)=>newName[0]!=="a");
//   return nameIndx;
// }

// console.log(nameArray(["asus","lenovo","acer","hp","axioo"]));

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
// console.log(txt += value);
// }

// let laptop = ["asus", "lenovo", "acer", "hp", "axioo"];
// let gpu = [4070, 4090, 4050, 4080, 4060];
//   function laptopGpu(laptop, gpu) {
//     // Mengurutkan array gpu dari angka terkecil ke terbesar
//     gpu.sort((a, b) => a - b);

//     // Gabungkan kedua array menjadi satu array objek
//     let combinedArray = [];
//     for (let i = 0; i < laptop.length; i++) {
//         combinedArray.push({ laptop: laptop[i], gpu: gpu[i] });
//     }

//     // Urutkan array objek berdasarkan nama laptop secara ascending
//     combinedArray.sort((a, b) => a.laptop.localeCompare(b.laptop));

//     // Bentuk output sesuai dengan format yang diminta
//     let output = combinedArray.map(item => {${item.laptop} dengan gpu ${item.gpu}});

//     return output;
// }
// console.log(laptopGpu(laptop, gpu));
