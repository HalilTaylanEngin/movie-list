import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import serialize from "form-serialize";
  
function ModalComponent(props) {
  
  let handleSubmit = (e) => {
    e.preventDefault();
    let newMovie = serialize(e.target, { hash: true });
    props.addNewMovie(newMovie)
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button
        className="w-100 float-right"
        variant="primary"
        onClick={handleShow}
      >
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}  >
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="title" name="title" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control type="number" placeholder="rating" name="vote_average" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="overview" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control  type="text" rows={3} name= "poster_path" />
            </Form.Group>
            <Button className="btn-success btn-block" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
