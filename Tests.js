let arr = [1,2,"hello",true, false, 'this iss amazing'];
let num = []
let str = []
let bool = [];

arr.forEach((e) => {
    if (typeof(e) === 'number') {
        num.push(e)
    }
    else if (typeof(e) === 'boolean') {
        bool.push(e)
    }
    else if (typeof(e) === 'string') {
        str.push(e)
    }
});

console.table({num, str, bool});




