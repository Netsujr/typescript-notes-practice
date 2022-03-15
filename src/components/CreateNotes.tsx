import * as React from 'react';
import { Button, Form } from 'react-bootstrap';

interface ICreateNotesProps {
}

const CreateNotes: React.FC<ICreateNotesProps> = (props) => {
  return (
    <>
    <h2>Create Notes</h2>
    <Form className="mt-3 mb-3">
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Text</Form.Label>
        <Form.Control placeholder="Enter note" as='textarea' rows={3} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="colorInput">Color</Form.Label>
        <Form.Control type="color" id='colorInput'
        // default="#dfdfdf"
        title="Which Color?" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default CreateNotes;
