function hasTargetSum(array, target) {
  for (i = 0; i < array.length; i++){
    for(i2 = 0; i2 < array.length; i2++){
      if (i !== i2 && array[i] + array[i2] === target){
        return true;
      }
    }
  }
  return false;
}

/* 
  O(n^2)
*/

/* 
  iterate through array
  for each item in array
  skip item in array
  iterate through other array items and find sum
  if sum === target then return true
*/

/*
  this finds every sum possible and finishes when target is found
  else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 6, 8], 14));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 2], 9));
}

module.exports = hasTargetSum;
