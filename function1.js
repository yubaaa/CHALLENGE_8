function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Outputs: [2, 4, 6]
