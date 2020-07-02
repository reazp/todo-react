import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
class AddTodoModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: event.target.title.value,
        details: event.target.details.value,
        isCompleted: false,
      }),
    };

    const response = await fetch(
      "http://localhost:3010/todos/new",
      requestOptions
    );
    console.log(response.json.body);
  }

  render() {
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add To Do
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <Row>
                <Col sm={6}>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="title">
                      <Form.Label>To Do Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        placeholder="todo title"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="details">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="text"
                        name="details"
                        placeholder="todo details"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Button variant="success" type="submit">
                        Add Todo
                      </Button>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddTodoModal;
