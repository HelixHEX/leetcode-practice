/* 
Description:

Given an integer num, repeatedly add 
all its digits until the result has only 
one digit, and return it.
*/

/* 
Example:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
*/

const addDigits = (num) => {
  //create a variable to hold the sum
  num = num.toString();

  //loop through the string
  while (num.length !== 1) {
      //reduce the string to a single digit while also adding the digits
      num = num.split('').reduce((a,i)=>+a + +i).toString();
  }  
  return num;
};