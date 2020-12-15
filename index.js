let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array){
 // code to write here
 let max_so_far = array[0]
 let current_max = array[0]
 for(let i = 1; i < array.length;i++){

    current_max = Math.max(array[i], current_max+array[i])
    if(current_max < 0){
        current_max = 0
    }
    max_so_far = Math.max(max_so_far, current_max)
}
return max_so_far
}