const isPalindrome = (N) => {
    let str = "" + N;
    let len = str.length;
    for (let i = 0; i < parseInt(len / 2, 10); i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return str; // Return the palindrome string
};

const numbers = [12321, 12345, 1221, 45654];

const palindromes = numbers.filter((number) => isPalindrome(number));

console.log(palindromes);

