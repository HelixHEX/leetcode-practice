/*
Description:
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

/*
Example:
Input: x = 123
Output: 321
*/

var reverse = function(x) {
    //create a variable to hold the reversed number
    let reversed = 0;
    //create a variable to hold the sign of x
    let sign = 1;
    //if x is negative
    if(x < 0) {
        //set the sign to -1
        sign = -1;
    }
    //loop through the number
    while(x !== 0) {
        //add the last digit of x to the reversed number
        reversed = reversed * 10 + x % 10;
        //remove the last digit of x
        x = Math.floor(x / 10);
    }
    //if the reversed number is greater than 2**31 - 1
    if(reversed > 2**31 - 1) {
        //return 0
        return 0;
    }
    //return the reversed number
    return reversed * sign;
};