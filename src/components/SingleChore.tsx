import React, {useEffect, useRef, useState} from 'react'
import { Todo } from '../models';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";

import './styles.css'
import TodoList from './TodoList';

interface Props {
  index: number;
  chore: Todo;
  chores: Todo[];
  setChores: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}


const SingleChore = ({index, chore,chores, setChores}: Props) => {
    
    const [edit, setEdit] = useState<boolean>(false);
    const [editChore, setEditChore] = useState<string>(chore.todo)

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      inputRef.current?.focus();
    }, [edit]);
   
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



      

  return (
    <Draggable draggableId={chore.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => handleEdit(e, chore.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
        >
          {edit ? (
            <input
              value={editChore}
              onChange={(e) => setEditChore(e.target.value)}
              className="todos__single--text"
              ref={inputRef}
            />
          ) : chore.isDone ? (
            <s className="todos__single--text">{chore.todo}</s>
          ) : (
            <span className="todos__single--text">{chore.todo}</span>
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
              <AiFillEdit className="edit" />
            </span>
            <span className="icon" onClick={() => handleDelete(chore.id)}>
              <AiFillDelete style={{ color: "red" }} />
            </span>
            <span className="icon" onClick={() => handleDone(chore.id)}>
              <MdOutlineDownloadDone style={{ color: "blue" }} />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
}

export default SingleChore