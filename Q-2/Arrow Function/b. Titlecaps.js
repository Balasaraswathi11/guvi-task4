var a="i'm going to be the king of the pirates"
var titlecase=()=>{
    var b=a.split(' ')
    for(let i=0;i<b.length;i++)
        {b[i]=b[i].charAt(0).toUpperCase()+b[i].substring(1).toLowerCase()}
    return(b.join(' '))}

    console.log(titlecase())
