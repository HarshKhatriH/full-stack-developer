
//                                            HOF (HIGH ORDER FUNCTION)

// -------------Reusable------------------
   /*   function Reuse(name)
      {
         return (`hello , ${name}`);
      }
      
      console.log(Reuse("harsh"));
      console.log(Reuse("khatri")); */

// ---------------modular--------------------

    /*  function Area(radius)
      {      
          return 3.14*radius*radius;
      }
      
      function Perimeter(radius)
      {
         let peri = 2*3.14*radius;
         let area = Area(radius)

         return area + peri
      }

      console.log("Total sum = " , Perimeter(5));  */

// ----------------------------- Passing Function as Argument ----------------

    /*   function user(name,callback)
       {
           callback();
           console.log(name);       
       }

       function goodMorning()
       {
           console.log("GoodMorning");
       }

       user("Harsh" , goodMorning)  */

// -------------------------------- Return functions from functions -----------------

    /*   function sum(a)
       {
           return function(b)
           {
               return a+b;
           }
         
       }

       let sum1= sum(5);
       console.log(sum1(2))
       console.log(sum1);  */

