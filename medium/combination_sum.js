/*
Description:
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
*/

/*
Example: 
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
*/

var combinationSum = function(candidates, target) {
    //create an empty array
    var result = [];
    //create an empty array
    var temp = [];
    //sort the candidates array
    candidates.sort((a, b) => a - b);
    //call the helper function
    helper(candidates, target, 0, temp, result);
    //return the result array
    return result;

    //helper function
    function helper(candidates, target, index, temp, result) {
        //if the target is 0
        if(target === 0) {
            //add the temp array to the result array
            result.push(temp.slice());
            //return
            return;
        }
        //if the target is less than 0
        if(target < 0) {
            //return
            return;
        }
        //loop through the candidates array
        for(var i = index; i < candidates.length; i++) {
            //add the current candidate to the temp array
            temp.push(candidates[i]);
            //call the helper function
            helper(candidates, target - candidates[i], i, temp, result);
            //remove the last element of the temp array
            temp.pop();
        }
    }
};

