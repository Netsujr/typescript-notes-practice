import * as React from 'react';
import { Button, Form } from 'react-bootstrap';

interface ICreateNotesProps {
}

const CreateNotes: React.FC<ICreateNotesProps> = (props) => {
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);
  return (
    <>
      <h2>Create Notes</h2>
      <Form className="mt-3 mb-3">
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" ref={ titleRef } />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control placeholder="Enter note" as='textarea' rows={ 3 } ref={ textRef }/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Color</Form.Label>
          <Form.Control type="color" id='colorInput'
            defaultValue="#dfdfdf"
            title="Which Color?" ref={ colorRef }/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default CreateNotes;
