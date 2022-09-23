import React, { useState } from 'react'

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<string>('LoggedIn')
  const loginHandler = () => {
    setIsLoggedIn('LoggedIn')
  }
  const logoutHandler = () => {
    setIsLoggedIn('Logged out')
  }

  return (
    <div>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
      <h3>User is {isLoggedIn}</h3>
    </div>
  )
}

export default LoggedIn
