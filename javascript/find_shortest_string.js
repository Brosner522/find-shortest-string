function findShortestString(arr) {
  // type your code here
  let shortest = arr[0];
  arr.forEach(str => {
    if (str.length < shortest.length) {
      shortest = str
    }
  })
  return shortest 
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lila'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lila', 'dadelion']));

  // BENCHMARK HERE
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    findShortestString(['flower', 'juniper', 'lila', 'dadelion']);
  }

  const avgTime = (Date.now() - startTime) / 1000;
  console.log(avgTime);

}

module.exports = findShortestString;

// Please add your pseudocode to this file
// *****************************************************************
//  * store the first string from the array in a variable called shortest
//  * 
//  * iterate over the array:
//  *    if the length of the current string < shortest:
//  *        shortest = current string
//  * 
//  * return shortest

// And a written explanation of your solution
/****************************************************************************
 * We can get the first occurrence of the shortest string by storing the first
 * string in the input array in a variable. As we iterate over the array, we 
 * check if the current string is shorter than the shortest string. If it is, 
 * we store the current string as the shortest string. Since we are checking if
 * subsequent strings are shorter than the shortest string, we will always return
 * the first occurrence of the shorest string. If we iterated over a string of
 * equal length to the shortest string, the value stored wouldn't change.
 ******************************************************************************/
