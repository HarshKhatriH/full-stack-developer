// -------------------------------------------------Map Method----------------------------------------------------------------

    /*   const data = [1,2,3,4,5,6];
       //  syntax = > map(callback(currentValue,index,array)); but index and array are optional
       const multiply = data.map(function(item)
       {
           return item*2;
       })

       console.log(multiply)  */

    // --------------Behind the scene(work)-----------------
        /*  const data = [1,2,3,4,5,6];
          const multiply =[];

          for(var i=0; i<data.length; i++)
          {
            multiply.push(data[i] * 2);
          }
           console.log(multiply)  */
    
    // ---------------map with index--------------------
        /*   const data = [10,20,30,40];
           const update = data.map((num,index) => num+index)
           console.log(update); */
    
    // ------------Arrow function used in map method-------
        /*   const user =["harsh","mannu","khatri"];
           const update = user.map(item => item)
           console.log(update);  */
    
    // -----------Extracting Property from object Array------
        /*    const data = [
                {name:"khatri",age:20},
                {name:"harsh", age:21},
                {name:"mannu", age:22}
            ];

        //  data.map(item=> {console.log(item)})
            const update = data.map(item=>item.name)
            console.log(update)    */
    
       
    