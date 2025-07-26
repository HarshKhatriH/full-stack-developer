
const reducer = (state,action) => {

    switch(action.type)
    {
        case "addTodo":  {
            return [...state, action.payload];
        }

        case "toggleTodo": {
            return state.map((item) => 
                !(item.id === action.payload.id) ? item : {...item,status:!item.status}
                // console.log(item.id)
                // console.log(action.payload.id)
            )
        }
    }
}

const value = [];

class Store{

    constructor(reducer,initialVal)
    {
        this.reducer = reducer;
        this.initialVal = initialVal;
    }

    getData()
    {
        return this.initialVal;
    }

    dispatch(action)
    {
        return this.initialVal = this.reducer(this.initialVal,action);
    }


}

const obj = new Store(reducer,value);

obj.dispatch({type:"addTodo", payload:{
    id:1,
    firstName:"harsh",
    lastName:"khatri",
    age:23,
    status:false,
}})

obj.dispatch({type:"addTodo", payload:{
    id:2,
    firstName:"mannu",
    lastName:"khatri",
    age:24,
    status:false,
}})

obj.dispatch({type:"addTodo", payload:{
    id:3,
    firstName:"adarsh",
    lastName:"khatri",
    age:24,
    status:false,
}})

// console.log(obj.getData());


obj.dispatch({type:"toggleTodo" , payload:{
    id:2
}})

console.log(obj.getData());