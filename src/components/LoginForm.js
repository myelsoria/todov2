import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Form>
      <Form.Group controlId='username'>
        <Form.Control
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId='password'>
        <Form.Control
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId='loginBtn'>
          <Button
            className='btn-block'
            variant='primary'>
                Login
          </Button>
      </Form.Group>
    </Form>
  )
}

export default LoginForm
