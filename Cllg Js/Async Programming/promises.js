let promise = new Promise(function(resolve, reject){
    // resolve(123);
    setTimeout(()=>{
        console.log("Promise is resolved 1 ✅");
        resolve(123);
    },2000);
    // reject("some error");
    setTimeout(()=>{        
        console.log("Promise is rejected 1 ✅");
        reject("some error");
    },2000);
});

promise.then(function(result){
        console.log("Promise is resolved 2 ✅");
        console.log(result);
        console.log("Promise is resolved 2 ✅");
    }).catch(function(error){
        console.log("Promise is rejected 2");
        console.log(error);
        console.log("Promise is rejected 2 ✅");
    });

console.log(promise);   
console.log("Promise is resolved 1 ✅");
console.log("Promise is rejected 1 ✅");
console.log("Promise is resolved 2 ✅");
console.log("Promise is rejected 2 ✅");