//Squares of a Sorted Array

/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

var sortedSquares = function(nums) {
    let result = [];
    for(i = 0; i < nums.length; i++){
        let sqNum = Math.pow(nums[i], 2);
        result.push(sqNum);
    }
    result.sort(function(a,b){return a - b});
    return result;
};

sortedSquares([-4,-1,0,3,10]);