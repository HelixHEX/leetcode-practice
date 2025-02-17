/*
Descrption:
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.
*/

/*
Example:
Input: dividend = 10, divisor = 3
Output: 3
*/
var divide = function(dividend, divisor) {
  if (dividend === -Math.pow(2, 31) && divisor === -1) {
    return Math.pow(2, 31) - 1;
  }
  if (divisor === 1) {
    return dividend;
  }
  let isNegative = false;
  if (dividend < 0 && divisor > 0 || (dividend > 0 && divisor < 0)) {
    isNegative = true;
  }
  let newDividend = Math.abs(dividend);
  const newDivisor = Math.abs(divisor);
  let result = 0;
  while(newDividend >= newDivisor) {
    newDividend = newDividend - newDivisor;
    result++;
  }
  return isNegative ? -result : result;
};
