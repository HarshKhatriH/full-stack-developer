import { ADDTODO, TOGGLETODO } from "./Actiontype.js";

export const reducer = (state, action) => {
  console.log(state, "state");
  switch (action.type) {
    case ADDTODO: {
      return { ...state, todo: [...state.todo, action.payload] };
    }
    case TOGGLETODO: {
      return {
        ...state,
        todo: state.todo.map((item) =>
          !(item.id === action.payload.id)
            ? item
            : { ...item, status: !item.status }
        ),
      };
    }
    default: {
      return state;
    }
  }
};
