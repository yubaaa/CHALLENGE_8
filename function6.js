function getUniqueElements(arr1, arr2) {
    // Concatenate the two input arrays
    const combinedArray = arr1.concat(arr2);
    
    // Create a new Set from the concatenated array to remove duplicates
    const uniqueSet = new Set(combinedArray);
    
    // Convert the Set back to an array using the spread operator
    const uniqueArray = [...uniqueSet];
    
    return uniqueArray;
}
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const uniqueElements = getUniqueElements(array1, array2);
console.log(uniqueElements); // Outputs: [1, 2, 3, 4, 5, 6]
