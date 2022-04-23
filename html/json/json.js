// const animal = { name: "Tom", type: "Cat", age: 3 };
// const jsonString = JSON.stringify(animal);
// console.log(animal);
// console.log(jsonString);

// const animal2 = JSON.parse(jsonString);
// console.log(animal2);

// const myArray = [42, 12, 5, 7];
// const jsonString = JSON.stringify(myArray);
// localStorage.array = jsonString;

console.log(localStorage.array);
const myArray = JSON.parse(localStorage.array);
console.log(myArray[1]);
