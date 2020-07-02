const initialState = {
  todos: [],
};

const ToDoReducer = function (state = initialState, action) {
  switch (action.type) {
    case "LOAD_TODO":
      return { ...state, todos: action.payload };

    /*
    case "DELETE_ITEM":
      const todos = [...state.items];
      const todoToDelete = action.payload;
      const itemIndex = todos.findIndex((item) => item.id === todoToDelete.id);
      todos.splice(itemIndex, 1);

      return { ...state, todos };
*/

    default:
      return state;
  }
};

export default ToDoReducer;
