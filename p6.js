//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const passwordGenerator = (length) => {
    const uppercaseLetters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const lowercaseChars = `abcdefghijklmnopqrstuvwxyz`;
    const number = `0123456789`;
    const specialChars = '!@#$%^&*()-_+=~`[]{}|:;"<>,.?/';
    const allPossibleChar = uppercaseLetters + lowercaseChars + number + specialChars;
    let finalPassword = '';

    for(let i = 0; i<length;i++){
        const randomIndex = Math.floor(Math.random() * allPossibleChar.length)
        finalPassword += allPossibleChar[randomIndex]
    }
    return finalPassword
}


console.log(passwordGenerator(12));
