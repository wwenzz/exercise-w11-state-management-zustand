import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";

export const useTodoStore = create(set => ({
  todos: [],
  addTodo: todo => {
    set(state => {
      const newTodo = {
        id: uuidv4(),
        createdAt: moment(),
        task: todo,
        completed: false,
      };
      return { todos: [...state.todos, newTodo] };
    });
  },
  deleteTodo: id => {
    set(state => ({ todos: state.todos.filter(todo => todo.id !== id) }));
  },
  completeTodo: id => {
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: true } : todo
      ),
    }));
  },
}));
