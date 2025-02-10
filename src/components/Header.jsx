import React from 'react'
import { useAuth } from '../context/AuthContext'
import ThemeOption from './ThemeOption'
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {

    const {user, logoutUser} = useAuth()
  return (
    <header className='app-header'>
        <div className="wrapper">
        
        {user ? (
            <div className='flex'>
                <span>Hello {user.email}</span>
                <button className='logout-btn' onClick={logoutUser}>
                  <span>Logout</span>
                    <span className='icon-wrapper'>

                    <LogoutIcon />
                    </span>
                 
                </button>
            </div>
        ): null}
        <div className="theme-options">
          <ThemeOption theme="light" />
          <ThemeOption theme="dark" />
          <ThemeOption theme="purple" />
        </div>

        </div>
    </header>
  )
}

export default Header