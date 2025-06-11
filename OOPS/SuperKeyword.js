class Person {
    constructor(){
        this.species = "Homo sapiens"
    }
    eat(){
        console.log("eats");
    }

    sleep(){
        console.log("sleeps");
    }
}

class engineer extends Person {
    constructor(branch){
        super(); //to invoke parents constructor which is necessary
        this.branch = branch;
    }
    code(){
        console.log("Do coding");
    }
}



let Akshu = new engineer("CSE");
console.log(Akshu);