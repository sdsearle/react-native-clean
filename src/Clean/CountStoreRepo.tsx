import {counter} from './CountModel';

let listeners: any[] = [];
let c: typeof counter = counter;
let nextId = 0;
let todos = [{id: nextId++, text: 'Todo #1'}];

class mTodos {
  todos = [{id: nextId++, text: 'Todo #1'}];
}

export const countStoreRepo = {
  increment() {
    c = {...c, count: c.count + 1};

    emitChange();
  },

  subscribe(listener: any) {
    console.log(`Trying to subscrubg listener: ${JSON.stringify(listener)}`);

    if (!listeners.includes(listener)) {
      console.log('subscribing');
      listeners = [...listeners, listener];
    }
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },

  getCounterSnapshot() {
    console.log(`getting snapshot ${JSON.stringify(c)}`);
    return c;
  },

  addTodo() {
    todos = [...todos, {id: nextId++, text: 'Todo #' + nextId}];
    emitChange();
  },

  getTodoSnapshot() {
    return todos;
  },
};

function emitChange() {
  console.log('Emiiting Change');

  for (let listener of listeners) {
    listener();
  }
}
