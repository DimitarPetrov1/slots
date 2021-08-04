function generateColumn() {
  let arr = [];
  let luckyNumber = 1;
  // Here I can adjust the chances
  for (let i = 0; i < 7; i++) {
    // ^^ number of numbers in array ^^
    let number = Math.floor(Math.random() * 5) + 3; // max value of the numbers we get + last number is change for larger number
    arr.push(number);
  }
  // if a random number in the function == magic number then sort the array
  function randomSortNumbers() {
    let n = Math.floor(Math.random() * 1); // chance to get the lucky number
    if (n === luckyNumber) {
      arr.sort((a, b) => a - b); // sort them by numbers
    }
  }
  // remove once testing is done
  // arr.push(7, 7, 7, 7, 5, 6, 9, 9, 9);
  //
  randomSortNumbers();
  return arr;
}
export default generateColumn;
