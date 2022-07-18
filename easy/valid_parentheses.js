/*
Description:
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

/*
Example:
Input: s = "()"
Output: true
*/

var isValid = function(s) {
    //create an empty array
    var stack = [];
    //loop through the string
    for(var i = 0; i<s.length; i++) {
        //if the current character is a left bracket
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            //add the character to the stack
            stack.push(s[i]);
        }
        //if the current character is a right bracket
        else if(s[i] === ')' || s[i] === '}' || s[i] === ']') {
            //if the stack is empty
            if(stack.length === 0) return false;
            //if the current character is a right bracket and the top of the stack is a left bracket
            if(s[i] === ')' && stack[stack.length - 1] === '(' || s[i] === '}' && stack[stack.length - 1] === '{' || s[i] === ']' && stack[stack.length - 1] === '[') {
                //remove the top of the stack
                stack.pop();
            }
            //if the current character is a right bracket and the top of the stack is a different left bracket
            else return false;
        }
    }
    //if the stack is empty
    if(stack.length === 0) return true;
    //if the stack is not empty
    else return false;
};