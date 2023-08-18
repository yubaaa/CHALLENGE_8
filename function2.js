
function filterPeopleOver30(peopleArray) {
    return peopleArray.filter(person => person.age > 30);
}
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 28 },
    { name: "David", age: 40 }
];

const peopleOver30 = filterPeopleOver30(people);
console.log(peopleOver30);
