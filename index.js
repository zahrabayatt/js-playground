const numbers = [1, 2, 3, 4];

try {
  const count = countOccurrences(true, 1);
  console.log(count);
} catch (error) {
  console.log(error.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid array.");
  }
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
