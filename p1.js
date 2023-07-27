//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseString = (myStr)=>{
   
    let revStr = '';
    let count = 0;
    for(let i = myStr.length-1 ; i>=0;i--){
        revStr += myStr[i]
        count ++;
    }
    console.log(count);
    return revStr;
}

console.log(reverseString('Rafiq'));






