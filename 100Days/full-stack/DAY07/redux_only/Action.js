import { ADDTODO, TOGGLETODO } from "./Actiontype.js";

const addToDo = (id, name, price) => {
  return {
    type: ADDTODO,
    payload: { id, name, price, status: false },
  };
};

const toggleToDo = (payload) => {
  return {
    type: TOGGLETODO,
    payload,
  };
};
export { addToDo, toggleToDo };
