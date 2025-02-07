import React from 'react'
import { useAuth } from '../context/AuthContext'

const Header = () => {

    const {user, logoutUser} = useAuth()
  return (
    <header className='app-header'>
        <div className="wrapper">
        {user ? (
            <div className='flex'>
                <span>Hello {user.email}</span>
                <button onClick={logoutUser}>Logout</button>
            </div>
        ): null}
        

        </div>
    </header>
  )
}

export default Header