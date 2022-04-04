import React, { useReducer } from 'react';

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

// actions 
type Actions = 
| { type: 'add', payload: string } 
| { type: 'remove', payload: number }
| { type: 'done', payload: number } 

// state is an array of todos
// action will have three things: edit, remove and done
/* const TodoReducer = (state: Todo[], action:Actions ) => {
 switch(action.type){
     case"add":
     return[
         ...state,
         {id: Date.now(), todo: action.payload, isDone: false}
     ]
    case"remove":
    return state.filter((todo) => todo.id !== action.payload);
    case"done":
    return state.map((todo) => todo.id !== action.payload ? {...todo, isDone: !todo.isDone}
     );
     default: 
     return state;
 }
} */

/* const ReducerExample = () => {
    const [state, dispatch] = useReducer(TodoReducer, []);

    return (
        <div />;
    )
} */