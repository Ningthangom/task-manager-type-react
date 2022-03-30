import React from 'react';

import './styles.css'
import {Todo} from '../models'
import SingleChore from './SingleChore';

interface Props {

    chores: Todo[],
  setChores: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({chores, setChores}) => {
  return (
    <div className="chores">
      {chores.map((chore) => {
        return (
          <SingleChore
            chore={chore}
            key={chore.id}
            chores={chores}
            setChores={setChores}
          />
        );
      })}
    </div>
  );
}

export default TodoList