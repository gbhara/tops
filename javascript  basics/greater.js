class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello");
    }
}



// Calling a method of the object is fine
person.greet();  // Outputs: "Hello, Alice!"

// Trying to call the object itself will result in an error
person();  // TypeError: person is not a function
       // "JavaScript"

