import React, { useRef } from "react";
import './InputStyles.css'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
 
  const inputRef = useRef<HTMLInputElement>(null);
 
  return (
    <form className="InputForm" onSubmit={(e)=> {
      handleAdd(e)
      inputRef.current?.blur();
      }}>
      <input
      ref={inputRef}
        className="input"
        value={todo}
        type="input"
        placeholder="enter a task"
        required
        onChange={
          (e) => setTodo(e.target.value)
        }
      />
      <button className="btn" type="submit">
        {" "}
        Add{" "}
      </button>
    </form>
  );
};

export default InputField;
