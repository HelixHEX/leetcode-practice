/*
Description:
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string ""
*/

/*
Example:
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

var longestCommonPrefix = function(strs) {
    //create an empty string
    var result = "";
    //if the array is empty
    if(strs.length === 0) return result;
    //if the array has one element
    if(strs.length === 1) return strs[0];
    //loop through the array
    for(var i = 0; i<strs[0].length; i++) {
        //create a variable to store the current character
        var current = strs[0][i];
        //loop through the array
        for(var j = 1; j<strs.length; j++) {
            //if the current character is not the same as the current character in the array
            if(strs[j][i] !== current) return result;
        }
        //add the current character to the result
        result += current;
    }
    //return the result
    return result;
};