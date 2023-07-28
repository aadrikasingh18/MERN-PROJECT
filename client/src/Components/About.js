import React from 'react'
import girl from "../img/girl1.jpg"

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={girl} alt="girl" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>ALISHA RASTOGI</h5>
                <h6>WEB DEVELOPER</h6>
                <p className='profile-rating mt-3 mb-5'>RANKINGS : <span>1/10</span></p>
              </div>
            </div>
            <div className="col-md-2">
              <input type="submit" className='profile-edit-btn' name="btnAddMore" value="Edit Profile" />
            </div>

            <div className="row" >
              {/* left side url */}
              <div className="col-md-6">
                <div className="profile-work">
                  <p>WORK LINK</p>
                  <a href='https://auth.geeksforgeeks.org/user/aadrika18' target="_blank">GFG</a><br />
                  <a href='https://www.linkedin.com/in/aadrika-singh-035219205/' target="_blank">Linkedin</a><br />
                  <a href='https://github.com/aadrikasingh18' target="_blank">Github</a><br />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About