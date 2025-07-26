
import {ADDTODO, TOGGLETODO} from './Actiontype.js'

export const addTodo = (id,name,price) => ({
    
    type: ADDTODO,
    payload: {
        id,name,price,status:false
    },
})


export const toggleTodo = (payload) => (
    {
        type: TOGGLETODO,
        payload: {
            id
        },
    }
)