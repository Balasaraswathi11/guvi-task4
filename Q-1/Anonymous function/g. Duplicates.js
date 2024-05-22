
let removeDuplicates=function(array) {
    let Array = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.indexOf(array[i]) === -1) {
            Array.push(array[i]);
        }
    }
    return Array;
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result); 
