function reverse(array) {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
const exampleArray = [1, 2, 3, 4, 5];
console.log(reverse(exampleArray));
