const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    }
};

const karan = {
    salary : 5000
};

const Arjun = {
    salary : 4000,
    calcTax(){
        console.log("Tax rate is 20%");
    }
};

//by setting prototype we can use properties of object 1 in Object 2
karan.__proto__ = employee;
Arjun.__proto__ = employee;

karan.calcTax();
Arjun.calcTax(); //function overriding