// LOGIN

import React from 'react'
import loginpic from "../img/login.jpg"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Signin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        
        const data = res.json();
        if (res.status === 400 || !data) {
            window.alert("INVALID CREDENTIALS");
            console.log("INVALID CREDENTIALS");
        }
        else {
            window.alert("LOGIN SUCCESSFUL");
            console.log("LOGIN SUCCESSFUL");
            navigate("/");
        }
    }
    return (
        <>
            <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">
                        <div className='signin-image'>
                            <figure>
                                <img src={loginpic} alt="Login pic" />
                            </figure>
                            <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink>
                        </div>
                        <div className='signin-form'>
                            <h2 className='form-title'>LOGIN</h2>
                            <form method="POST" className='register-form' id="register-form">
                                <div className='form-group'>
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email"></input>
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock-open"></i>
                                    </label>
                                    <input type="text" name="password" id="password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password"></input>
                                </div>

                                <div className='form-group form-button'>
                                    <input type="submit" name="signin" id="signin" className='form-submit' value="LOGIN" onClick={loginUser} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Signin
