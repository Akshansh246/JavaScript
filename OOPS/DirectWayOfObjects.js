const student = {
    fullname : "Akshu",
    marks : 90.7,
    printmarks : function() {
        console.log("marks =", this.marks);
    },
    printname(){
        console.log("Name =",this.fullname);
    }
}

student.printname();