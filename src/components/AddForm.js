import { Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'

function AddForm({ onAddTodo }) {
  const formik = useFormik({
    initialValues: { todoText: '' },
    onSubmit: (values, { resetForm }) => {
      if (values.todoText !== '') {
        const randId = Math.random().toString(36).slice(2)
        const todo = { id: randId, todoText: values.todoText }
        onAddTodo(todo)
        resetForm()
      }
    },
  })

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId='todoText' className='d-flex'>
          <Form.Control
            type='text'
            placeholder='add todo...'
            {...formik.getFieldProps('todoText')}
          />
          <Button type='submit' variant='primary'>
            Add
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddForm
