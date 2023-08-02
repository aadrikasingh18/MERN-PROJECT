import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);

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
      setShow(true);
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
          <h3>Dear {userName}</h3>
          <h2>{show ? 'Happy to see you here!' : 'WELCOME'}</h2>
        </div>
      </div>
    </>
  )
}

export default Home