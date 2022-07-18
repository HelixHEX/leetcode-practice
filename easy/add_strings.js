/*
Description:

Given two non-negative integers, num1 and num2 represented as string, 
return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling 
large integers (such as BigInteger). You must also not convert the inputs to 
integers directly.
*/

/*
Example:

Input: num1 = "11", num2 = "123"
Output: "134"
*/

const addStrings = (num1, num2) => {
  //create a variable to hold the length of num1
  let n1 = num1.length - 1;
  //create a variable to hold the length of num2
  let n2 = num2.length - 1;
  //create a variable to hold the sum
  let output = "";
  //create a variable to hold the carry
  let carry = 0;
  //loop through the strings
  while (n1 >= 0 || n2 >= 0) {
    //create a variable to hold the sum of the digits
    let sum = "";
    //if the length of num1 is greater than 0 and the length of num2 is greater than 0
    if (n1 >= 0 && n2 >= 0) {
      //add the digits of num1 and num2
      sum = +num1[n1] + +num2[n2] + carry;
    } else if (n1 >= 0) {
      //add the digits of num1 and the carry
      sum = +num1[n1] + carry;
    } else if (n2 >= 0) {
      //add the digits of num2 and the carry
      sum = +num2[n2] + carry;
    }

    //if the sum is greater than 10
    if (sum >= 10) {
      //subtract 10 from the sum
      output = (sum % 10).toString() + output;
      //set the carry to 1
      carry = 1;
    } else {
      //add the sum to the output
      output = sum.toString() + output;
      //set the carry to 0
      carry = 0;
    }
    //decrement the length of num1
    n1--;
    //decrement the length of num2
    n2--;
  }
  //return the output
  return carry === 1 ? "1" + output : output;
};
