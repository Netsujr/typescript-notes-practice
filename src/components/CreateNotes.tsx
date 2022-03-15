import * as React from 'react';
import { Alert, Button, Form, Card, Container } from 'react-bootstrap';
import { Note } from '../models/note.model';

interface ICreateNotesProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {
  const [error, setError] = React.useState<string>('');
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (titleRef.current?.value === '' || textRef.current?.value === '') {
      return setError('All fields are required');
    }

    setError('');
    setNotes([...notes, {
      id: (new Date()).toString(),
      title: (titleRef.current as HTMLInputElement).value,
      text: (textRef.current as HTMLTextAreaElement).value,
      color: (colorRef.current as HTMLInputElement).value,
      date: (new Date()).toString(),
    }]);

    (titleRef.current as HTMLInputElement).value = '';
    (textRef.current as HTMLTextAreaElement).value = '';
  };

  return (
    <>
      { error && <Alert variant='danger'> { error } </Alert> }
      <Container className='mt-3 position-sticky sticky-top'>
        <h2>Create Notes</h2>
        <Card className='mt-3'>
          <Card.Body>
            <Form className="mt-3 mb-3" onSubmit={ (event) => handleSubmit(event) }>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" ref={ titleRef } />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Text</Form.Label>
                <Form.Control placeholder="Enter note" as='textarea' rows={ 3 } ref={ textRef } />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="colorInput">Color</Form.Label>
                <Form.Control type="color" id='colorInput' defaultValue="#dfdfdf" title="Which Color?"
                style={{width: '60px'}}
                ref={ colorRef } />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default CreateNotes;
