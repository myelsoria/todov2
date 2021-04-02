import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useFormik } from 'formik'

function LoginForm() {
  const [loginError, setLoginError] = useState('')

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      setLoginError('')
      if (values.username !== 'myaccount' || values.password !== '123456')
        setLoginError('Invalid Credentials')
    },
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
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
        <Button type='submit' className='btn-block' variant='primary'>
          Login
        </Button>
      </Form.Group>
      {loginError && <Alert variant='danger'>{loginError}</Alert>}
    </Form>
  )
}

export default LoginForm
