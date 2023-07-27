//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
//Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const mostFrequentElement = (myArray) => {
    let mf = 1;
    let m = 0;
    let item;
    for (let i = 0; i < myArray.length; i++) {
        for (let j = i; j < myArray.length; j++) {
            if (myArray[i] == myArray[j])
                m++;
            if (mf < m) {
                mf = m;
                item = myArray[i];
            }
        }
        m = 0;
    }
    return item

    /*  let frequentArray = new Array(myArray.length).fill(0);
     for (let i = 0; i < myArray.length; i++) {
         if (!frequentArray.includes(myArray[i]) && frequentArray.length <= myArray.length) {
 
             if (frequentArray[myArray[i]] === 0) {
                 frequentArray[myArray[i]] = 1;
             }
             else {
                 frequentArray[myArray[i]]++;
             }
         }
     }
 
    return max = frequentArray.reduce((a,b)=> Math.max(a,b)) */

}

console.log(mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));
console.log(mostFrequentElement([9, 2, 3, 4, 5, 6, 7, 8, 9, 9]));









