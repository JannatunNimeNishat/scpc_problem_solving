//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

// Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)


const twoSum = (myArray, target) => {
    /* for (let i = 0; i < myArray.length; i++) {
            if(myArray[i]+myArray[i+1] == target){
                return [i,i+1]
            }
        
    } */
    for (let i = 0; i < myArray.length; i++) {
        for (let j = i+1; j < myArray.length; j++) {
            if(myArray[i]+myArray[j] == target){
                return [i,j]
            }
        }
    }
}

console.log(twoSum([1, 3, 6, 8, 11, 15], 9));
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));