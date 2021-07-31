function generateColumn() {
  let arr = [];
  let luckyNumber = 1;
  // Here I can adjust the chances
  for (let i = 1; i <= 3; i++) {
    // ^^ number of numbers in array ^^
    let number = Math.floor(Math.random() * 5); // max value of the numbers we get
    arr.push(number);
  }
  // if a random number in the function == magic number then sort the array
  function randomSortNumbers() {
    let n = Math.floor(Math.random() * 2); // chance to get the lucky number
    if (n === luckyNumber) {
      arr.sort((a, b) => a - b); // sort them by numbers
    }
  }
  // remove once testing is done
  // arr.push(1, 2, 3, 4, 5, 6, 9, 9, 9);
  //
  randomSortNumbers();
  return arr;
}
export default generateColumn;
