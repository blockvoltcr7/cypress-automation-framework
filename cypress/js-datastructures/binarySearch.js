/** 
 * binary search requires a sorted array or other data structure
 * we need to divide and conquer
 * we will check the middle then check if the number we are looking is greater or less than the value we are looking for,
 * if the value is is less than the value we are looking for then we check the left part of the array and repeat the proccess,
 * until we find the value we are looking for
 * 
 * 
 * psueduo code:
 * 
 * create a left pointer at the start of the array and right pointer at the end of the array
 * while the left pointer comes before the right pointer 
 *  - create a pointer at the middle 
 *  - if you find the value you want, return the index 
 *  - if the value is too small, move the left pointer up 
 *  - if the value is too large, move the right pointer down
 * if you never find the value you are looking for return -1
 * 
*/

 

function binarySearch(arr,val){
    
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(arr[middle] !== val){
        if(val < arr[middle] && start <= end){
            end = middle - 1;
        }else{
            end = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    console.log("start:"+ start+ " middle:" + middle + " end:"+end)
    if(arr[middle] === val){
        return middle;
    }
    return -1
}


let val = binarySearch([2,4,6,7,11,14,18,20,21,45,50], 4);

console.log(val)