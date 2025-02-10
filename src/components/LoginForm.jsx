import React, { useRef } from 'react'
import { useAuth } from '../context/AuthContext'

const LoginForm = ({setActiveForm}) => {
  const formRef = useRef(null)
  const {loginUser} = useAuth()
  const handleLogin = () => {
    loginUser(formRef.current.email.value, formRef.current.password.value)
  }
  return (
    <div className='login-reg-wrapper'>
      <h1>Login</h1>
      <form ref={formRef} onSubmit={handleLogin} className='login-reg-form'>
        <div className='field-wrapper'>
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' required/>
        </div>
        <div className='field-wrapper'>
          <label htmlFor="password">Password:</label>
          <input type="password" name='password' required />
        </div>
        <div className='field-wrapper'>
          <input type="submit" value="Login" />
        </div>
      </form>
      <p>
        Don't have an account?{" "}
        <span style={{cursor: "pointer", textDecoration:"underline"}} onClick={() => setActiveForm("register")}>
          Signup
        </span>
      </p>
    </div>
  )
}

export default LoginForm