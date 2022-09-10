import React, { useState } from 'react'
import './Login.css'
import errorIcon from '../../assets/errorIcon.png'
import { useNavigate } from 'react-router-dom'
import { LoginService } from '../../services/LoginService'

const Login = () => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    
    const [activeForm, setActiveForm] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    let navigate = useNavigate()

    const handleLogin = async(e) => {
        e.preventDefault();

        setActiveForm(false);
        setLoading(true);
        try {    
            let user = await LoginService({username, password})
            window.localStorage.setItem(
                'loggedUserOnApp', JSON.stringify(user)
            )
            setTimeout(() => {
                setLoading(false)
                setSuccess(true)
            }, 3000);
            setTimeout(() => {
                navigate('/home')
            }, 4500);
        } catch (error) {
            setTimeout(() => {
                console.error(error)
                setUsername(null)
                setPassword(null)
                setLoading(false)
                setActiveForm(true)
                setError(true)
            }, 3000);
        }

    }

  return (
    <section id='login'>
        {activeForm &&
        <>
            <div id='login-card'>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className='login-card-field'>
                        <p>Username:</p>
                        <input type="text" onChange={({target}) => setUsername(target.value)} className='login-card-field-input' required/>
                    </div>
                    <div className='login-card-field'>
                        <p>Password:</p>
                        <input type="password" onChange={({target}) => setPassword(target.value)} className='login-card-field-input' required/>
                    </div>
                    <button id='login-card-btn'>Sign In</button>
                </form>
            </div>
            {error &&
                <div id='login-card-error'>
                    <img src={errorIcon} alt="error icon" />
                    <p>Wrong username and/or password</p>
                </div>
            }
        </>
        }
        {loading &&
            <div id='login-loading'>
                <div>
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    <h1>Wait please.</h1>
                </div>
            </div>
        }
        {success &&
            <div id='login-success'>
                <h1>{`Welcome, ${username}!`}</h1>
            </div>
        }
    </section>
  )
}

export default Login