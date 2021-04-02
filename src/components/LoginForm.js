import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useFormik } from 'formik'
import { loginFormValidation } from '../validation/loginFormValidation'

function LoginForm() {
  const [loginError, setLoginError] = useState('')

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginFormValidation,
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
        {formik.touched.username && formik.errors.username ? (
          <span className='text-danger'>{formik.errors.username}</span>
        ): null }
      </Form.Group>
      <Form.Group controlId='password'>
        <Form.Control
          type='password'
          placeholder='password'
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
          <span className='text-danger'>{formik.errors.password}</span>
        ) : null }
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
