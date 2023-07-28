import React from 'react'
import signpic from "../img/signup.jpg"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  //Async function is used here
  //Fetch api returns PROMISE
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register",{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name, email, phone, work, password, cpassword
          })
        });
        const data = await res.json();
        if(res.status === 422 || !data){
          window.alert("INVALID REGISTRATION");
          console.log("INVALID REGISTRATION");
        }
        else
        {
          window.alert("REGISTRATION SUCCESSFUL");
          console.log("REGISTRATION SUCCESSFUL");  
          navigate("/login");
        }
  }

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title'>Sign Up</h2>
              <form method="POST" className='register-form' id="register-form">
                <div className='form-group'>
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account-circle"></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete='off' value={user.name} onChange={handleInputs} placeholder="Your Name"></input>
                </div>
                <div className='form-group'>
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete='off' value={user.email} onChange={handleInputs} placeholder="Your Email"></input>
                </div>
                <div className='form-group'>
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-smartphone-android"></i>
                  </label>
                  <input type="number" name="phone" id="phone" autoComplete='off' value={user.phone} onChange={handleInputs} placeholder="Your Mobile Number"></input>
                </div>
                <div className='form-group'>
                  <label htmlFor="work">
                    <i class="zmdi zmdi-case"></i>
                  </label>
                  <input type="text" name="work" id="work" autoComplete='off' value={user.work} onChange={handleInputs} placeholder="Your Profession"></input>
                </div>
                <div className='form-group'>
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock-open"></i>
                  </label>
                  <input type="text" name="password" id="password" autoComplete='off' value={user.password} onChange={handleInputs} placeholder="Your Password"></input>
                </div>
                <div className='form-group'>
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input type="text" name="cpassword" id="cpassword" autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder="Confirm your password"></input>
                </div>
                <div className='form-group form-button'>
                  <input type="submit" name="signup" id="signup" className='form-submit' value="REGISTER" onClick={PostData} />
                </div>
              </form>
            </div>

            <div className='signup-image'>
              <figure>
                <img src={signpic} alt="registration pic" />
              </figure>
              <NavLink to="/Signin" className="signup-image-link">I am already registered</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup