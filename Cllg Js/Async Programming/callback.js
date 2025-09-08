function step1(fn) {
    setTimeout(()=>{
        console.log("Select a photo");
        fn()
    },5000);
}

function step2(fn){
    setTimeout(()=>{
        console.log('Choose a Filter');
        fn()
    },4000);
}

function step3(fn) {
    setTimeout(()=>{
        console.log('Write a suitable caption');
        fn()
    },3000);

}

function step4() {
    setTimeout(()=>{
        console.log('Post');
    },1000);
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            step4()
        })
    })
})