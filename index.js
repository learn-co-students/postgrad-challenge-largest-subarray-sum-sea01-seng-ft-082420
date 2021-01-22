// Given an array of integers find a sequence with the largest sum.

let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
 
function largestSubarraySum(array){
 
    let total = array[0]
    let temp = 0
    if (array.length == 1){
        return array[0]
    }
    for (let i= 0; i < array.length; i++) {

        temp = Math.max(array[i], temp+array[i])
        total = Math.max(temp, total)
    }
    if (total < 0) {
        return 0
    }
    return total
}
 