import React from 'react'
import Logo from '../components/Logo'

const HeaderIfLoggedOut = () => {
     return (
          <header className="header-logged-out">
               <Logo />
               {/* LoginForm */}
          </header>
     )
}

export default HeaderIfLoggedOut
