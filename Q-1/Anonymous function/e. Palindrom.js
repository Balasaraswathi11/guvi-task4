const Palindrome = function(N) {
    let str = "" + N;
    let len = str.length;
    for (let i = 0; i < parseInt(len / 2, 10); i++) {
        if (str[i] != str[len - 1 - i ]) {
            return false;
        }
    }
    return true;
};
console.log(Palindrome(12321)); // true
console.log(Palindrome(12345)); // false
console.log(Palindrome('mom')); // true

