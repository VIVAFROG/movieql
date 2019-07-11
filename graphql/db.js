export const people = [{
    id: "0",
    name: "Nicolas",
    age: 10,
    gender: "female"
}, {
    id: "1",
    name: "a",
    age: 1,
    gender: "male"
}, {
    id: "2",
    name: "b",
    age: 2,
    gender: "female"
}, {
    id: "3",
    name: "c",
    age: 3,
    gender: "female"
}, {
    id: "4",
    name: "d",
    age: 4,
    gender: "male"
}, {
    id: "5",
    name: "e",
    age: 6,
    gender: "male"
}, {
    id: "6",
    name: "f",
    age: 8,
    gender: "female"
}, ];


export const getById = id => {
    const filteredPeople = people.filter(person => id === people.id);
    return filteredPeople[0];
}