import React, { useEffect } from 'react'
import person from "../img/person.jpg"
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
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

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
    // eslint-disable-next-line
    callAboutPage();
  }, []);

  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={person} alt="person" />
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
                <h6>EMAIL : {userData.email}</h6>
                <h6>PROFESSION : {userData.work}</h6>
                <h6>PHONE : {userData.phone}</h6>
                {/* <p className='profile-rating mt-3 mb-5'>RANKINGS : <span>1/10</span></p> */}
              </div>
            </div>
            <div className="col-md-2">
              <input type="submit" className='profile-edit-btn' name="btnAddMore" value="Edit Profile" />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About