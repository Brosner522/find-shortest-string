function findShortestString(arr) {
  // THE LONGER WAY OF DOING THE EXACT SAME THING THAT'S ON LINES 13-14
  // let shortest = arr[0];

  // arr.forEach(string => {
  //   if (string.length < shortest.length) {
  //     shortest = string;
  //   }
  // });

  // return shortest;

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

  // BENCHMARK HERE
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    findShortestString(['flower', 'juniper', 'lily', 'dadelion']);
  }

  const avgTime = (Date.now() - startTime) / 1000;
  console.log(avgTime);
}

module.exports = findShortestString;

