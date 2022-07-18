/*
Description:

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
*/

/*
Exmaple:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

//recursive solution
const isPalindrome = (x) => {
  //create a variable to hold the palindrome number as a string
  const str = String(x);

  //if the length of the string is less than or equal to 1
  if(x.length <= 1) {
    //return true
    return true;
  }

  //if the first and last characters of the string are not equal to each other
  if (str[0] !== str[str.length - 1]) {
    //return false
    return false;
  }

  //return the result of calling isPalindrome on the string without the first and last characters
  return isPalindrome(str.slice(1, str.length - 1));
};