const a=[1,2,3,4,5,6,7,8,9,10]
const odd=(function(){
    result=[]
    for(let i=0;i<a.length;i++){
        if(a[i]%2!=0)
            {result.push(a[i])}
    }
return result}

)()
console.log(odd)
