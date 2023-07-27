//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallestNumber = (myArray) =>{
    const sortedArray = myArray.sort((a,b)=>a-b)
    return sortedArray[1];
}

console.log(findSecondSmallestNumber([3,2,7,9,10]));