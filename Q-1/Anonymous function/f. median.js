var mergearray=function(array1,array2)
{let result=[]
let i=0
let j=0
while(i<array1.length&&j<array2.length){
    if(array1[i]<array2[j]){
        result.push(array1[i])
        i++
    }
    else{result.push(array2[j])
        j++
    }}
    while(i<array1.length){result.push(array1[i])
        i++
    }
    while(j<array2.length){result.push(array2[j])
        j++
    }

return result

}

let findmedian=function(arr1,arr2){
    const merge=mergearray(arr1,arr2)
    let n=merge.length
    if(n%2==1){return merge[Math.floor(n/2)]}
    else{return (merge[n/2-1]+merge[n/2])/2}
}
console.log("The Median is: "+findmedian([1,3],[2]))
console.log("The Median is: "+ findmedian([1,5,9,10,54,63],[3,6,9,14,47,78]))
