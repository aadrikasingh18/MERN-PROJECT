import React from 'react'
import './Register.css'
import signpic from "../img/signup.jpg"
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div class="row">
            <div class="col-sm">
              <div className='signup-content'>
                <div className='signup-form'>
                  <h2 className='form-title'>Sign Up</h2>
                  <form className='register-form' id="register-form">
                    <div className='form-group'>
                      <label htmlFor="name">
                        <i class="zmdi zmdi-account-circle"></i>
                      </label>
                      <input type="text" name="name" id="name" autoComplete='off' placeholder="Your Name"></input>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="email">
                        <i class="zmdi zmdi-email"></i>
                      </label>
                      <input type="email" name="email" id="email" autoComplete='off' placeholder="Your Email"></input>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="phone">
                        <i class="zmdi zmdi-smartphone-android"></i>
                      </label>
                      <input type="number" name="phone" id="phone" autoComplete='off' placeholder="Your Mobile Number"></input>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="work">
                        <i class="zmdi zmdi-case"></i>
                      </label>
                      <input type="text" name="work" id="work" autoComplete='off' placeholder="Your Profession"></input>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="password">
                        <i class="zmdi zmdi-lock-open"></i>
                      </label>
                      <input type="text" name="password" id="password" autoComplete='off' placeholder="Your Password"></input>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="cpassword">
                        <i class="zmdi zmdi-lock"></i>
                      </label>
                      <input type="text" name="cpassword" id="cpassword" autoComplete='off' placeholder="Confirm your password"></input>
                    </div>
                    <div className='form-group form-button'>
                      <input type="submit" name="signup" id="signup" className='form-submit' value="REGISTER" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div className='signup-image'>
                <figure>
                  <img src={signpic} alt="registration pic" />
                </figure>
              </div>
              <NavLink to="/login" className="signup-image-link">I am already registered</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register