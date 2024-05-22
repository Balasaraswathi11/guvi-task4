const isPalindrome = (function() {
    return function(N) {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++) {
            if (str[i] != str[len - 1 - i ]) {
                return false;
            }
        }
        return true;
    };
})();

// Usage
console.log(isPalindrome("dad"); // true
console.log(isPalindrome(12345)); // false


