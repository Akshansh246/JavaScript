class Person{
    constructor(person){
        this.person = {
            name: person.name,
            age: person.age
        }
    }
}

person = new Person({
    name: "John", 
    age: 30
});