const arr = [1, 2, 3, 4, 5];
(function(array, k) {
    const n = array.length;
    k %= n; 
    for (let i = 0; i < k; i++) {
        const temp = array.pop(); 
        array.unshift(temp); 
    }
})(arr, 2);

console.log(arr);

