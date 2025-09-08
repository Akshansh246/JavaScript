//creating a custon filter
let arr = [1,2,3,4,5];
Array.prototype.myFilter = function(cb){
    let res = [];
    for (let i = 0; i < this.length; i++) {
       if (cb(this[i], i, this)) {
            res.push(this[i]);
       }  
    }
    return res
}

let data = arr.myFilter((a,b,c)=>{
    return a>2
})

console.log(data)