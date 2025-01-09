function calculateAverage(numbers) {
  // Check if the array is empty
  if (numbers.length === 0) {
    return 0; // Return 0 if the array is empty
  }

  // Calculate the sum of all numbers in the array
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  // Calculate the average by dividing the sum by the total count of numbers
  const average = sum / numbers.length;

  return average;
}

// Example usage:
const numbers = [3, 5, 20, 20, 40, 50, 100]; // Sample array of numbers
const result = calculateAverage(numbers);
console.log("The average is:", result);
