import LoginForm from '../components/LoginForm'
function LoginPage() {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <div className='border border-dark px-4 py-5'>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
