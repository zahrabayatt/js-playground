sources: //www.youtube.com/watch?v=aNDfsHQ5Gts&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu&index=2

// Example - what is async JS?
https: console.log(1);
console.log(2);

setTimeout(() => {
  console.log("callback function fired.");
}, 2000);

console.log(3);
console.log(4);
