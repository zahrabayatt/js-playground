showNumbers(10);

function showNumbers(limit) {
  if (typeof limit !== "number") return;

  for (let i = 0; i <= limit; i++) {
    //   if (i % 2 === 0) console.log(i, "EVEN");
    //   else console.log(i, "ODD");

    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
