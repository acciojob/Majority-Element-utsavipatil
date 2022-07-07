// arr = array of numbers
function major(arr)
{
    //S : O(1),  T : O(n)
    let count = 1 , majIdx = 0;

    for(let i=1; i<arr.length; i++){

        if(arr[majIdx] == arr[i]){ //If same as Majority Element
          count++;

        }else{
          count--;
        }

        if(count == 0){ //Reset values
          count = 1;
          majIdx = i;
        }
    }

    return arr[majIdx];
}
module.exports=major;
