console.log("one");
console.log("two");

setTimeout(() => {
    console.log("helloo");
},4000);

//code won't wait to complete the above line that line will run parallely
console.log("three");
console.log("four");
