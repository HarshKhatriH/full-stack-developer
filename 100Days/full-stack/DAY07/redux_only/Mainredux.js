import { legacy_createStore } from "redux";
import { reducer } from "./main.js";
import { addToDo, toggleToDo } from "./Action.js";
const initState = {
  todo: [],
  name: "harsh",
  surname: "khatri",
};

const store = legacy_createStore(reducer, initState);

store.dispatch(addToDo(1, "water", 10));
store.dispatch(addToDo(2, "cold drink", 20));
store.dispatch(addToDo(3, "coffee", 30));

store.dispatch(toggleToDo({ id: 2 }));
// store.dispatch(toggleToDo_action({ id: 2 }));

console.log(store.getState());
