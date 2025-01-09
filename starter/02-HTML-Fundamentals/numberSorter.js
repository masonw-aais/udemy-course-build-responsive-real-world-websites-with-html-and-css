function sortNumbers(numbers) {
  return numbers.sort(function (a, b) {
    return a - b;
  });
}

// Example usage:
const numbers = [9, 5, 8, 9, 7, 7, 8, 7, 8, 4, 8, 9, 8, 7, 7, 7, 9, 8, 7, 8, 9];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);
