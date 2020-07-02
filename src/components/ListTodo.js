import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { connect } from "react-redux";
import { loadTodo } from "../actions/ToDoAction";
import AddTodoModal from "./AddTodoModal";
import EditTodoModal from "./EditTodoModal";
class ListTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalSHow: false,
      editModalShow: false,
    };
  }
  async deleteTodo(todoID) {
    if (window.confirm("Are you sure")) {
      const url = `http://localhost:3010/todos/` + todoID;
      await fetch(url, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }
  componentDidMount() {
    this.props.loadTodo();
  }
  componentDidUpdate() {
    this.props.loadTodo();
  }

  addModalClose = () => {
    this.setState({ addModalSHow: false });
  };
  editModalClose = () => {
    this.setState({ editModalSHow: false });
  };
  render() {
    const { todoID, title, details } = this.state;
    const { todos } = this.props;

    return (
      <div>
        <Table className="mt-4" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo Title</th>
              <th>Todo Details</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.details}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      className="mr-2"
                      variant="info"
                      onClick={() => {
                        this.setState({
                          editModalSHow: true,
                          todoID: todo.id,
                          title: todo.title,
                          details: todo.details,
                        });
                      }}
                    >
                      Edit Todo
                    </Button>
                    <EditTodoModal
                      show={this.state.editModalSHow}
                      onHide={this.editModalClose}
                      todoID={todoID}
                      title={title}
                      details={details}
                    />
                    <Button
                      className="mr-2"
                      onClick={() => {
                        this.deleteTodo(todo.id);
                      }}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => {
              this.setState({ addModalSHow: true });
            }}
          >
            Add Todo
          </Button>
          <AddTodoModal
            show={this.state.addModalSHow}
            onHide={this.addModalClose}
          />
        </ButtonToolbar>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    todos: state.todo.todos,
  };
}

export default connect(mapStateToProps, { loadTodo })(ListTodo);
