/*
Description:
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.
*/

/*
Example:
Input: nums = [1,2,0]
Output: 3
*/

var firstMissingPositive = function(nums) {
  if(nums.length === 0) return 1
  
  const size = nums.length
  let seen_one = false
  
  // change invalid to 1 
  nums.forEach((el, ind) => {
      if(el === 1 && !seen_one) seen_one = true
      else if(el < 1 || el > size) nums[ind] = 1
  })  
  
  if(!seen_one) return 1
  
  // mark visited
  nums.forEach(el => {
      const ind = Math.abs(el) - 1
      if(nums[ind] > 0) nums[ind] *= -1
  })  
  
  // find missing
  for(let i = 0; i < size; ++i){
      if(nums[i] > 0) return ++i;
  } 
  
  return size + 1
};  