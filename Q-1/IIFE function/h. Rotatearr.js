const arr = [1, 2, 3, 4, 5];
(function(array, k) {
    const n = array.length;
    k %= n; // Normalize k in case it's larger than the array length
    for (let i = 0; i < k; i++) {
        const temp = array.pop(); // Remove the last element
        array.unshift(temp); // Add the last element to the beginning
    }
})(arr, 2);

console.log(arr); // Output: [4, 5, 1, 2, 3]

