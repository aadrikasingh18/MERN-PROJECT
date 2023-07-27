import React from 'react'
import './Login.css'
import loginpic from "../img/login.jpg"
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <section className="login">
        <div className="container mt-5">
          <div class="row">
            <div class="col-sm">
              <div className='login-image'>
                <figure>
                  <img src={loginpic} alt="Login pic" />
                </figure>
              </div>
              <NavLink to="/register" className="login-image-link">Create an Account</NavLink>
            </div>
            <div class="col-sm">
              <div className='login-content'>
                <div className='login-form'>
                  <h2 className='form-title'>LOGIN</h2>
                  <form className='register-form' id="register-form">

                    <div className='form-group'>
                      <label htmlFor="email">
                        <i class="zmdi zmdi-email"></i>
                      </label>
                      <input type="email" name="email" id="email" autoComplete='off' placeholder="Your Email"></input>
                    </div>

                    <div className='form-group'>
                      <label htmlFor="password">
                        <i class="zmdi zmdi-lock-open"></i>
                      </label>
                      <input type="text" name="password" id="password" autoComplete='off' placeholder="Your Password"></input>
                    </div>
                    <div className='form-group form-button'>
                      <input type="submit" name="login" id="login" className='form-submit' value="LOGIN" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login