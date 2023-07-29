import React, { useEffect } from 'react'
import girl from "../img/girl1.jpg"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      // yaha pr (req, res) vla res nhi hai dusra res hai
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          // Accept: "application/json", check kro "Accept" hoga ya Accept
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      navigate('/signin');
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={girl} alt="girl" />
                {/* Agr 2 user ho and name ke basis pr pic change krne hai
                <img src={userData.name === "Vinod Bhadur Thapa ? thapapic : aboutpis"} alt ="thapa"*/}
                {/* thapapic and about pic import krenge jaise girl ki import ki hai */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
              {/* <h5>Alisha Rastogi</h5> */}
                <h5>{userData.name}</h5>
                {/* <h6>WEB DEVELOPER</h6> */}
                <h6>{userData.work}</h6>
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