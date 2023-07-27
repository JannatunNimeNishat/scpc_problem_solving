//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
//Example Input: [2, -5, 10, -3, 7] Example Output: 19


const sumOfAllPositiveNumber = (myArray) =>{

   /* let total = 0;
     for(let i=0;i<myArray.length;i++){
        if(myArray[i]>=0){
            total += myArray[i]
        }
    } */

    let positiveArray = myArray.filter(item => item>=0)
    let positiveSum = positiveArray.reduce(((current,total)=> current+total),0) 
    
    return positiveSum
}


console.log(sumOfAllPositiveNumber([1,-2,3,-4,5,-6]));





