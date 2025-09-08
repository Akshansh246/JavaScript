arr = [1,2,23,4]
Array.prototype.myMap =function(callback){
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i],i,this))
    }
    return res
}

let data = arr.myMap((a,b,c)=>{
    return a;
})

console.log(data)