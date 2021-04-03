import { useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'
import { Button } from 'react-bootstrap'

function LogoutBtn() {
  const dispatch = useDispatch()
  return (
    <Button variant='primary' onClick={() => dispatch(logout())}>
      Logout
    </Button>
  )
}

export default LogoutBtn
