export default function todoReducer(todos, action) {
  switch (action.type) {
    case "loaded": {
      return JSON.parse(localStorage.getItem("todos")) || [];
    }
    case "added": {
      const { title } = action;
      const newTodos = [...todos, { id: new Date(), title }];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    }
    case "deleted": {
      const { id } = action;
      const newTodos = todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    }
    default: {
      throw Error(`알 수 없는 액션 타입: ${action.type}`);
    }
  }
}
