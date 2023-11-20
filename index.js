const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  return mapAverageToGrade(average);
}

function calculateAverage(array) {
  let sum = 0;
  for (const value of array) sum += value;
  return sum / array.length;
}

function mapAverageToGrade(average) {
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}
