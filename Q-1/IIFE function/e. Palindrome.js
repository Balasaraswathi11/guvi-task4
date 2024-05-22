const array = ["level", "hello", "radar", "world", "madam"];

const palindromes = (function() {
    return array.filter(function(word) {
        const reversed = word.split("").reverse().join("");
        return word === reversed;
    });
})();

console.log(palindromes);

