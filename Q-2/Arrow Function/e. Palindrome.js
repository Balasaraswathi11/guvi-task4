
const Palindrome = ((N) => {
    let str = "" + N;
    let len = str.length;
    for (let i = 0; i < parseInt(len / 2, 10); i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
});

console.log(Palindrome('dad'));//true
console.log(Palindrome(1221)) // Output: true
console.log(Palindrome(1234)) //false

