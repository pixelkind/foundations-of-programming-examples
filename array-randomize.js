function randomize(array) {
  let randomizedArray = [];
  while (array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    randomizedArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return randomizedArray;
}

let exampleArray = [1, 2, 3, 4, 5];
console.log(randomize(exampleArray));
