export const login = (values) => {
  if (values.username === 'myaccount' && values.password === '123456') {
    return {
      type: 'USER_LOGIN_SUCCESSFUL',
      payload: values.username
    }
  }else {
    return {
        type: 'USER_LOGIN_FAILED',
        payload: 'Invalid Credentials'
      }
  }
}

export const logout = () => {
  return {
    type: 'USER_LOGOUT'
  }
}
