//Demonstartion of Event Loop
console.log("Start");


setTimeout(() => {
  console.log("First");
}, 0);

setInterval(() => {
  console.log("second");
}, 1000);

for (let i = 0; i <= 10000; i++);

console.log("Done");
