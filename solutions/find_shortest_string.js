function findShortestString(arr) {
  return arr.reduce((shortest, string) => 
    string.length < shortest.length ? string : shortest);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log(findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log(findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log(findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: 'cat'");
  console.log(findShortestString(['cat']));
}

module.exports = findShortestString;

