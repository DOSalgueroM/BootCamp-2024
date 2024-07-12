const array = [10, 5, 3, 4, 7];

const smallestNumber = array.reduce((acc, curr) => {
  return acc < curr ? acc : curr;
});

console.log(smallestNumber);