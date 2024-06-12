import { create } from 'zustand';

/* 
  下記の機能を追加実装してください
  1.追加されたtodoがリロードされても状態を保持したままになっていること
  2.IconButtonにあるonClickイベントが発火された時に背景色が切り替わるロジックを追加実装する
  　IconButtonの「colorScheme」と「icon」も状態によって切り替わること
    
  補足
    問1と2のstoreはこのファイルに一緒に記述してもOK
    chakra uiのColorModeScriptを使用しないで実装してください
  ヒント
  　・問2はstoreにisDarkModeというstateを作成してください
  　・storeを作成後、_app.tsxのChakraProviderにthemeに反映させてください
  　・src/styles/theme.tsにスタイルを反映させるために必要なコードが記述されています。
*/

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Filter = 'all' | 'active' | 'completed';

type State = {
  todos: Todo[];
  inputValue: string;
  filter: Filter;
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  setFilter: (filter: Filter) => void;
  setInputValue: (value: string) => void;
};

const useStore = create<State>((set) => ({
  todos: [],
  inputValue: '',
  filter: 'all',
  addTodo: (text) => set((state) => ({ todos: [...state.todos, { id: state.todos.length + 1, text, completed: false }] })),
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    })
  })),
  setFilter: (filter) => set({ filter }),
  setInputValue: (value) => set({ inputValue: value }),
}));

export { useStore };