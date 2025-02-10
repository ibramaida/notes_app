import React, { useRef } from 'react'
import { useAuth } from '../context/AuthContext'

const RegisterForm = ({setActiveForm}) => {
  const formRef = useRef(null)

  const {registerUser} = useAuth()

  const handleRegister = (e) => {
    e.preventDefault()
    const name = formRef.current.name.value
    const email = formRef.current.email.value
    const password1 = formRef.current.password1.value
    const password2 = formRef.current.password2.value

    const userInfo = {name, email, password1, password2}
    if(password1 !== password2){
      alert("passwords did not match!")
      return
    }
    registerUser(userInfo)
  }
  return (
    <div className='login-reg-wrapper'>
      <h1>Register</h1>
      <form ref={formRef} onSubmit={handleRegister} className='login-reg-form'>
        <div className='field-wrapper'>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' required/>
        </div>
        <div className='field-wrapper'>
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' required/>
        </div>
        <div className='field-wrapper'>
          <label htmlFor="password">Password:</label>
          <input type="password" name='password1' required />
        </div>
        <div className='field-wrapper'>
          <label htmlFor="password">Confirm Password:</label>
          <input type="password" name='password2' required />
        </div>
        <div className='field-wrapper'>
          <input type="submit" value="Signup" />
        </div>
      </form>
      <p>
                Already have an account?{" "}
                <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => {
                        setActiveForm("login");
                    }}
                >
                    Login
                </span>
            </p>
    </div>
  )
}

export default RegisterForm