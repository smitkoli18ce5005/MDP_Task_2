//JAVASCRIPT PALINDROME CHECKER

let string = "eye"

function palindrome(str){
    return str == str.split('').reverse().join('');
}

console.log(palindrome(string));