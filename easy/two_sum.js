/* 
Description: 

Given an array of integers nums and an integer target, return indices of 
the two numbers such that they add up to target. You may assume that each 
input would have exactly one solution, and you may not use the same element 
twice. You can return the answer in any order.
*/


/* 
Example:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

//initial funciton
const twoSum = (nums, target) => {
  //create an empty array
  var map = new Map();

  //loop through the array
  for(var i = 0; i<nums.length; i++) {
      
      var num = nums[i];
      //if the target - nums[i] is in the map
      if(map.get(num) === undefined) map.set(target-num, i);
      
      //return the index of the two numbers
      else return [map.get(num), i];
  }
};