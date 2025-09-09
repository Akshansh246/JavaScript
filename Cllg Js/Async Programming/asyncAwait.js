const step1 = function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 1000);
    });
}

const step2 = function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 1000);
    });
}

const step3 = function(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3 completed");
            resolve();
        }, 1000);
    });
}

const step4 = function(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 4 completed");
            resolve();
        }, 1000);
    });
}

const main = async function(){
    await step1();
    await step2();          
    await step3();
    await step4();
}

main();