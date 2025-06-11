let x ={
    name : "Akshu",
    age : 20,
    isMarried : false
};
for (const key in x) {
    if (Object.prototype.hasOwnProperty.call(x, key)) {
        console.log(x[key]);
    }
}