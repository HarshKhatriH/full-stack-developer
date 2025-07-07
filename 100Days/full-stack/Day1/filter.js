const number = [1,2,3,4,5,6,7,8,9];

// const evenNumber = number.filter((item)=>item%2==0)
                    // or 
 const evenNumber = number.filter(function(item) {
    return item%2==0
 })

console.log(evenNumber)