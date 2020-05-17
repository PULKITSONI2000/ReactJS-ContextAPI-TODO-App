// reducer take advantage of action file and define what can/should i do when i hit 'ADD_TODO'

import { ADD_TODO, REMOVE_TODO } from "./action.types";

export default (state, action) => {
  // action is an object
  switch (
    action.type // type = what should i do with it
  ) {
    case ADD_TODO:
      return [...state, action.payload]; //here action.paylode cary the information we pass it (kind  a baggage) may be an object or an string. in this example we pass sting of todo
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload); //all values which are true carry forward to new array

    default:
      return state;
  }
};
