// WAP to find largest number of an array


function largestNo(arr)
{
    let max= -Infinity;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > max)
        {
            max=arr[i];
        }
    }

    return max;
}


let arr=[22,15,-42,1,0,84,-3,10,42];
console.log(largestNo(arr));
