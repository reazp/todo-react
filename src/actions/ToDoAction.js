export const loadTodo = () => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3010/todos`);
    const todos = await res.json();
    dispatch({
      type: "LOAD_TODO",
      payload: todos,
    });
  };
};
/*
export const deleteTodo = (todoID) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3010/todos` + todoID);
    const message = await res.json();
    dispatch({
      type: "DELETE_TODO",
      payload: message,
    });
  };
};
*/
