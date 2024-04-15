import { create } from "zustand"

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: () => {
    set()
  },
  deleteTodo: () => {
    set()
  },
  completeTodo: () => {
    set()
  },
}))
