class Person {
    eat(){
        console.log("eats");
    }

    sleep(){
        console.log("sleeps");
    }
}

class engineer extends Person {
    code(){
        console.log("Do coding");
    }
}

class Doctor extends Person {
    diagnose(){
        console.log("Diagnose Patients");
    }
}

let Akshu = new Doctor;
Akshu.sleep();

Akshu = new engineer;
Akshu.code();