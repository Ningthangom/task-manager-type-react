import React, {useState} from 'react';
import './App.css';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import {Todo} from './models'

import InputField from './components/InputField'
import TodoList from './components/TodoList';

const  App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [chores, setChores] = useState<Array<Todo>>([]);
    const [CompletedTodos, setCompletedTodos] = useState<Array<Todo>>([]);


  const handleAdd = (e: React.FormEvent) => {
    console.log("handleAdd is called")
    e.preventDefault();
    if(todo){
      setChores([...chores,{id:Date.now(), todo: todo, isDone: false}]);
      console.log("this is chores", chores);
      setTodo("");
    }
  };

    const onDragEnd = (result: DropResult) => {
      const { destination, source } = result;

      console.log(result);

      if (!destination) {
        return;
      }

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      let add;
      let active = chores;
      let complete = CompletedTodos;
      // Source Logic
      if (source.droppableId === "TodosList") {
        add = active[source.index];
        active.splice(source.index, 1);
      } else {
        add = complete[source.index];
        complete.splice(source.index, 1);
      }

      // Destination Logic
      if (destination.droppableId === "TodosList") {
        active.splice(destination.index, 0, add);
      } else {
        complete.splice(destination.index, 0, add);
      }

      setCompletedTodos(complete);
      setChores(active);
    };


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Task Managing board</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          chores={chores}
          setChores={setChores}
          CompletedTodos={CompletedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
