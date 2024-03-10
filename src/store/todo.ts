// store.ts

import { create } from 'zustand';

type Todo = {
  id: number;
  text: string;
};

type State = {
  todos: Todo[];
  inputValue: string;
  addTodo: (text: string) => void;
  setInputValue: (value: string) => void;
};

const useStore = create<State>((set) => ({
  todos: [],
  inputValue: '',
  addTodo: (text) => set((state) => ({ todos: [...state.todos, { id: state.todos.length + 1, text, completed: false }] })),
  setInputValue: (value) => set({ inputValue: value }),
}));

export { useStore };