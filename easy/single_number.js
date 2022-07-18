/*
Description: 

Given a non-empty array of integers nums, every element 
appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity 
and use only constant extra space.
*/

/*
Example:

Input: nums = [2,2,1]
Output: 1
*/

const singleNumber = (nums) => {
  //loop through numbers
  for (let i = 0; i < nums.length; i++) {
    //create a variable to hold the number (temporary)
    let tmp = nums.pop();
    //if the number is in the array
    if (nums.includes(tmp)) {
      //remove the number
      nums.unshift(tmp);
      continue;
    }
    //return the number
    return tmp;
  }
};
