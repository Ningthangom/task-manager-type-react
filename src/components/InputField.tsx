import React from 'react'
import "./styles.css"

const InputField: React.FC = () => {
  return (
    <form className="input">
      <input className="input-box" type="input" placeholder="enter a task" required />
    <button className="btn" type="submit"> Add </button>
    </form>
  );
}

export default InputField