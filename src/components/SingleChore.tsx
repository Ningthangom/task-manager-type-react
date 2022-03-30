import React, {useEffect, useRef, useState} from 'react'
import { Todo } from '../models';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";

import './styles.css'
import TodoList from './TodoList';

interface Props {
  chore: Todo;
  chores: Todo[];
  setChores: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}


const SingleChore = ({chore,chores, setChores}: Props) => {
    
    const [edit, setEdit] = useState<boolean>(false);
    const [editChore, setEditChore] = useState<string>(chore.todo)

    // delete chore
    const handleDelete = (id: number) => {
        setChores(chores.filter((todo) => todo.id !== id))
    }
        // mark chore as done
      const handleDone = (id: number) => {
        setChores(
          chores.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          )
        );
      };

      const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
          e.preventDefault();
          setChores(
            chores.map((todo) =>
              todo.id === id ? { ...todo, todo: editChore } : todo
            )
          );
          setEdit(false);
      }
const inputRef = useRef<HTMLInputElement>(null);

      useEffect(() => { 
        inputRef.current?.focus();
      },[edit])


      

  return (
    <form className="singlechore" onSubmit={(e) => handleEdit(e, chore.id)}>
      {edit ? (
        <input
        ref={inputRef}
          className="chores_single--text"
          value={editChore}
          onChange={(e) => setEditChore(e.target.value)}
        />
      ) : chore.isDone ? (
        <s className="chores_single--text">{chore.todo}</s>
      ) : (
        <span className="chores_single--text">{chore.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !chore.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(chore.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(chore.id)}>
          <MdOutlineDownloadDone />
        </span>
      </div>
    </form>
  );
}

export default SingleChore