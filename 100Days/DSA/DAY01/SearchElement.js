// Search an element , if element is there than return the index of that number otherwise return -1


function searchElement(arr,key)
{
    for(let i=0; i<arr.length; i++){
        if(arr[i] == key)
        {
            return i+1;
        }
    }

    return -1;


}


let arr=[22,15,42,1,0,84,3,10,42];
console.log(searchElement(arr,84));
console.log(searchElement(arr,4));
