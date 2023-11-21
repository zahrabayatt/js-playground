const movies = [
  { title: "a", year: 2023, rating: 4.5 },
  { title: "b", year: 2023, rating: 4.7 },
  { title: "c", year: 2023, rating: 3 },
  { title: "d", year: 2014, rating: 4.5 },
];

const output = movies
  .filter((m) => m.year === 2023 && m.rating >= 4)
  //   .sort((a, b) => {
  //     // descending sort
  //     if (a.rating < b.rating) return 1;
  //     if (a.rating > b.rating) return -1;
  //     return 0;
  //   })
  .sort((a, b) => b.rating - a.rating) // descending sort - both rating are number so we can use short way
  .map((obj) => obj.title);

console.log(output);
