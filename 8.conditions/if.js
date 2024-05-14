const price = 10000;
const payment = 9000;
// 1. kalau uangnya pas
if(payment === price){
  console.log("Makasih dah bayar pake uang pas");
}else if (payment > price){
  //2. ketika uangnya lebih
  const change = payment - price;
  console.log(`Terima kasih, kembalian anda sebesar ${change}`);
}else{
  const moneyDeficit = price - payment;
  console.log(`Maaf, uang anda kurang ${moneyDeficit}`);
}