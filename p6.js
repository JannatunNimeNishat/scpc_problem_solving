//Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInt = (romanNum) => {
    let romanValues = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }
    let result = 0;
    for (let i = 0; i < romanNum.length; i++) {
        let current = romanValues[romanNum[i]];
        let next = romanValues[romanNum[i+1]]
        if(current<next){
            result = next - current;
            i++;
        }
        else{
            result += current
        }
    }
    return result;
}

console.log(romanToInt('IV'));
console.log(romanToInt('III'));
