/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  var i = 0;
  var result = [];
  for (i; i <= nums.length; i++) {
    var j = i + 1;
    for (j; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] == target) {
        result.push(i, j);
      }
    }
  }
  console.log('result is', result);
};

twoSum([8, 9, 3, 33, 11, 4, 6, 7, 4, 3], 37);