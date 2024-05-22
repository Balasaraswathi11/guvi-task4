const rotateArray = function(array, k) {
    const n = array.length;
    k = k % n; 
    for (let i = 0; i < k; i++) {
        const temp = array.pop(); 
        array.unshift(temp);
    }
};

const arr = [1, 2, 3, 4, 5];
rotateArray(arr, 2);
console.log(arr);

