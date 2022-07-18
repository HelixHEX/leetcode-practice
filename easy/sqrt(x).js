/*
Description:

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, 
and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, 
such as pow(x, 0.5) or x ** 0.5.
*/

/*
Example:

Input: x = 4
Output: 2
*/

const mySqrt = (x) => {
  //create a variable to hold the square root
  let lo = 0,
    //
    hi = x;
  //loop through the numbers
  while (lo < hi) {
    //create a variable to hold the midpoint
    const mid = parseInt((lo + hi) / 2);
    //if the midpoint squared is equal to x
    if (mid * mid === x) {
      //return the midpoint
      return mid;
    }
    //if the midpoint squared is less than x
    if (x < mid * mid) {
      //set the high to the midpoint - 1
      hi = mid - 1;

      //if the midpoint squared is greater than x
    } else {
      //set the low to the midpoint + 1
      lo = mid + 1;
    }
  }
  return x < hi * hi ? hi - 1 : hi;
};
