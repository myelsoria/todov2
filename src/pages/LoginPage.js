import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoginForm from '../components/LoginForm'

function LoginPage({ history }) {
  const { username } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (username) history.push('/todolist')
  }, [username, history])

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <div className='border border-dark px-4 py-5'>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
