const a = "i am gonna be the king of pirates"
const titlecase=(function(){
    const b=a.split(' ')
    for(i=0;i<b.length;i++)
        {b[i]=b[i].charAt(0).toUpperCase()+b[i].substring(1).toLowerCase()}
    console.log(b.join(' '))
})()
