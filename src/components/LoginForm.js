import { Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'

function LoginForm() {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
  })
  return (
    <Form>
      <Form.Group controlId='username'>
        <Form.Control
          type='text'
          placeholder='username'
          {...formik.getFieldProps('username')}
        />
      </Form.Group>
      <Form.Group controlId='password'>
        <Form.Control
          type='password'
          placeholder='password'
          {...formik.getFieldProps('password')}
        />
      </Form.Group>
      <Form.Group controlId='loginBtn'>
        <Button className='btn-block' variant='primary'>
          Login
        </Button>
      </Form.Group>
    </Form>
  )
}

export default LoginForm
