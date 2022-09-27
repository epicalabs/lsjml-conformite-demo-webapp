import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons' 
import React, { useEffect, useRef, useState } from 'react'
import QuebecLogo from '../../assets/Quebec-logo.png'
import './Header.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext'

const Header = () => {

  const {auth, logout} = useContext(AuthContext)
  const ref = useRef()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isOpen])

  return (
    <header>
        <div id="header-logo">
          <img src={QuebecLogo} alt="Software-logo" />
        </div>
        {auth &&
          <div ref={ref}>
            <button onClick={() => setIsOpen(isOpen => !isOpen)} id='header-user-card'>
              <div id='header-user-card-content'>
                <h2>{auth.user}</h2>
                <p>{auth.role}</p>
              </div>
              <div id='header-user-card-dropdown'>
                <FontAwesomeIcon icon={faCaretDown}/>
              </div>
            </button>
              <Link to={'/'} className={`header-user-dropdown ${isOpen && 'is-open'}`} onClick={logout}>
                <FontAwesomeIcon icon={faRightFromBracket}/>
                <p>Logout</p> 
              </Link>
          </div>
        }
    </header>
  )
}

export default Header