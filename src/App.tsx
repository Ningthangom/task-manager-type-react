import React, {useState} from 'react';
import './App.css';
import {Todo} from './models'

import InputField from './components/InputField'
import TodoList from './components/TodoList';

const  App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [chores, setChores] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    console.log("handleAdd is called")
    e.preventDefault();
    if(todo){
      setChores([...chores,{id:Date.now(), todo: todo, isDone: false}]);
      console.log("this is chores", chores);
      setTodo("");
    }
  };



  return (
    <div className="App">
      <span className="heading"> Task Mananger </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList chores={chores} setChores={setChores} />
      
    </div>
  );
}

export default App;
