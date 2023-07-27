import React from 'react'
import './About.css'
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
                <p className='profile-rating mt-3 mb-5'>RANKINGS <span>1/10</span></p>

                <ul className="nav nav-tabs" role=" tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                  </li>
                </ul>
              </div>
            </div>


            <div className="col-md-2">
              <input type="submit" className='profile-edit-btn' name="btnAddMore" value="Edit Profile" />
            </div>
          </div>


          <div className="row">
            {/* left side url */}

            <div className="col-md-4">
              <div className="profile-work">
                <p>Work Link</p>
                <a href='https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_tabs_dropdown&stacked=h' target="_thapa">Youtube</a><br />
                <a href='https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_tabs_dropdown&stacked=h' target="_thapa">Youtube</a><br />
                <a href='https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_tabs_dropdown&stacked=h' target="_thapa">Youtube</a><br />

              </div>
            </div>

            {/* right side toggle */}

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div classNmae="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby='home-tab'>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>44444444444</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Thapa </p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>44444444444</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </form >
      </div >

    </>
  )
}

export default About
