class Car {
    constructor(){
        console.log("new car created");
    }
    start(){
        console.log("Start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand = brand;
        console.log(this.brand);
    }
};

let fortuner = new Car;

fortuner.start();
fortuner.stop();
fortuner.setBrand("toyota");