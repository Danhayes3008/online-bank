import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className='App'>
        <div className="container login-page">
            <div className="row">
                <div className="login-form card g-2">
                    <h2 className='text-center'>Welcome to Internet Banking</h2>
                    <form action="POST">
                        <div className='form-user'>
                            <label for="Username">Username:</label>
                            <input type="text" name="username" />
                        </div>
                        <div className='form-password'>
                            <label for="Password">Password:</label>
                            <input type="password" name="password" />
                        </div>
                        <hr />
                        <NavLink to="#">Forgotten your login details?</NavLink>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login