
const reducer = (state,action) => {
    // console.log(action,"inside reducer")

    switch(action.type)
    {
        case "addTodo": {
            return [...state,action.payload]
        }

        case "toggleTodo": {
            return  state.map((item) => !(item.id === action.payload.id) ? item : {...item,status:!item.status})
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
        // console.log(action)
    }
};


    const addStore = (id,firstName,lastName,age) => {
        return {

        type:"addTodo",        
        payload : {
            id,
            firstName,
            lastName,
            age,
            status:false
        }}
    }

    const deActive = (id) => {
        return{
            type:"toggleTodo",
            payload:{
                id,
            }
        }
    }

    

const obj = new Store(reducer,value);


obj.dispatch(addStore(1,"harsh","khatri",23));
obj.dispatch(addStore(2,"mannu","khatri",24));
obj.dispatch(addStore(3,"adarsh","khatri",25));

obj.dispatch(deActive(2))


console.log(obj.getData());