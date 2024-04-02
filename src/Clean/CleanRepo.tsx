import {useState} from 'react';
import {counter} from './CountModel';
import {todoModel, todosBase, todosModel} from './TodosModel';

let nextId = 0;

export const useCleanRepo = () => {
  const [c, setCounter] = useState(counter);
  const [todos, setTodos] = useState<todoModel[]>(todosBase);

  const increment = () => {
    setCounter({...c, count: c.count + 1});
  };

  const addTodo = () => {
    setTodos([...todos, {id: ++nextId, text: 'Todo #' + nextId}]);
  };

  return {c, increment, todos, addTodo};
};
