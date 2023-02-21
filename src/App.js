import "./App.css";

import { DarkModeProvider } from "./context/DarkModeContext";
import TodoApp from "./TodoApp";

export default function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <TodoApp />
      </DarkModeProvider>
    </div>
  );
}
