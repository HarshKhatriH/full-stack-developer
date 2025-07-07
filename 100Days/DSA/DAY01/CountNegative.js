// WAP to count number of negative number in an array


function countNegative(arr)
{
    let count=0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] < 0)
        {
            count++;
        }
    }

    return count
}


let arr=[22,15,-42,1,0,84,-3,10,42];
console.log(countNegative(arr));
