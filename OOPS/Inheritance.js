class Parent {
    greet() {
        console.log("hello");
    }
};

//we use a keyword "extend"
class child extends Parent {};

let chhild = new child;

chhild.greet();
