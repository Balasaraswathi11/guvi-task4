
const result = ((array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
})([1, 2, 2, 3, 4, 4, 5]);

console.log(result); 
