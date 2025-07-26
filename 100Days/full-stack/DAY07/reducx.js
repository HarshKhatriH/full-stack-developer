
// const reducer = (state,action) => 
// {
//     switch(action.type)
//     {
//         case "add": {
//             return (state+action.payload)
//         }

//         case "sub": {
//             return (state - action.payload)
//         }
//     }
// }

// console.log(reducer(20,{type:"sub" , payload:10}))


const reducer = (state,action) => 
{
    console.log("count" , state.count)
    switch(action.type)
    {
        case "add": {
            return {...state, count:state.count + action.payload}
        }

        case "sub": {
            return {...state, count:state.count - action.payload}
        }
    }
}


const value = {
    count:10
}

class Store
{
  constructor(reducer,initialState)
  {
    this.reducer = reducer;
    this.initialState = initialState;
  }


 getData()
 {
    return this.initialState;
 }


 dispatch(action)
 {
    this.initialState = this.reducer(this.initialState,action)
 }



};

const obj = new Store(reducer,value)
obj.dispatch({type:"sub",payload:5})

console.log(obj.getData());