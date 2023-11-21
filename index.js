const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, -1);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (array.length <= position) {
    console.error("Invalid offset");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}
