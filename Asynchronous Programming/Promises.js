let promise = new Promise((resolve,reject) => {
    resolve(123);
    reject("some error");
});

console.log(promise);