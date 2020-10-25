import { Todo } from './models';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { loadTodosAsync, addTodo, removeTodo } from './actions';

export const todos = createReducer([
  {
    id: '0',
    title: 'You can add new todos using the form or load saved snapshot...',
  },
] as Todo[])
  .handleAction(loadTodosAsync.success, (state, action) => action.payload)
  .handleAction(addTodo, (state, action) => [...state, action.payload])
  .handleAction(removeTodo, (state, action) =>
    state.filter(i => i.id !== action.payload)
  );

const todosReducer = combineReducers({
  todos,
});

export default todosReducer;
export type TodosState = ReturnType<typeof todosReducer>;
