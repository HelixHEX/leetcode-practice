/*
Description:

Given two integer arrays nums1 and nums2, 
return an array of their intersection. Each 
element in the result must be unique and you 
may return the result in any order.
*/

/*
Example:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
*/


const intersection = (nums1, nums2) => {
    //create an empty array
    var map = new Map();
    //loop through the first array
    for(var i = 0; i<nums1.length; i++) {
        //if the number is not in the map
        if(map.get(nums1[i]) === undefined) map.set(nums1[i], 1);
        //if the number is in the map
        else map.set(nums1[i], map.get(nums1[i]) + 1);
    }
    //create an empty array
    var result = [];
    //loop through the second array
    for(var i = 0; i<nums2.length; i++) {
        //if the number is in the map
        if(map.get(nums2[i]) !== undefined) {
            //add the number to the array
            result.push(nums2[i]);
            //remove the number from the map
            map.delete(nums2[i]);
        }
    }
    //return the array
    return result;
};