import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [userName, setUserName] = useState('');

  const userHomePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      setUserName(data.name);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="home-div">
          <p className="pt-5">WELCOME</p>
          <h1>{userName}</h1>
          <h2>We are the MERN developers</h2>
        </div>
      </div>
    </>
  )
}

export default Home