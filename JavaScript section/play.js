const person = {
    name: "Max",
    age: 29,
    greet() {
        console.log("Hi, I am " + this.name);
    },
};

const hobbies = ["Sporsts", "Cooking"];
hobbies.push("Programming");
console.log(hobbies.map((hobby) => "Hobby: " + hobby));

// SPREAD OPERATOR
const copiedArray = [...hobbies];
console.log(copiedArray);

// REST OPERATOR
const toArray = (...args) => args;

console.log(toArray(1, 2, 3, 4, 5));

/// DESTRUCTURING
const printName = ({ name, age }) => {
    console.log(name);
    console.log(age);
};

printName(person);

const { name, age } = person;
