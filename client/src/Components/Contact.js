import React from 'react'
import { useEffect, useState } from 'react'

const Contact = () => {

  const [userData, setUserData] = useState({ name: "", email: "", phone: "", work: "", message: "" });
  const userContact = async () => {
    try {
      // yaha pr (req, res) vla res nhi hai dusra res hai
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone, work: data.work });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userContact();
  }, []);

  //storing data in states

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  // sending the data to backend

  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, message } = userData;


    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, message
      })
    });

    const data = await res.json();

    if (!data) {
      console.log("Message not send");
    }
    else {
      alert("Message send");
      setUserData({ ...userData, message: "" });
    }
  }

  return (
    <>
      <div className="container">
        <div className='contact_info'>
          <div className='container-fluid'>
            <div className='row'>
              <div className="top">
                <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
                  <div className='contact_info_item d-flex justify-content-start align-items-center'>
                    <i class="zmdi zmdi-smartphone-android"></i>
                    <div className='contact_info_content'>
                      <div className='contact_info_title'>
                        Phone
                      </div>
                      <div className='contact_info_text'>
                        {userData.phone}
                      </div>
                    </div>
                  </div>

                  <div className='contact_info_item d-flex justify-content-start align-items-center'>
                    <i class="zmdi zmdi-email"></i>
                    <div className='contact_info_content'>
                      <div className='contact_info_title'>
                        Email
                      </div>
                      <div className='contact_info_text'>
                        {userData.email}
                      </div>
                    </div>
                  </div>
                  <div className='contact_info_item d-flex justify-content-start align-items-center'>
                    <i class="zmdi zmdi-case"></i>
                    <div className='contact_info_content'>
                      <div className='contact_info_title'>
                        Work
                      </div>
                      <div className='contact_info_text'>
                        {userData.work}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact us form */}
        <div className="contact_form">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="contact_form_container py-4">
                  <h4 style={{color:'#97cbfa'}}>
                    SHARE YOUR FEEDBACK
                  </h4>
                  <form method="POST" id="contact_form">
                    <div className='contact_form_inputs d-flex flex-md-row flex-column justify-content-between'>

                      <input type="text" id="contact_form_name" className='contact_form_name input_field' name="name" value={userData.name} onChange={handleInputs} placeholder='Your Name' required="true" />

                      <input type="email" id="contact_form_email" className='contact_form_email input_field' name="email" value={userData.email} onChange={handleInputs} placeholder='Your Email' required="true" />

                      <input type="number" id="contact_form_phone" className='contact_form_phone input_field' name="phone" value={userData.phone} onChange={handleInputs} placeholder='Your Phone Number' required="true" />
                    </div>
                    <div className="contact_form_text mt-3">
                      <textarea className='text_field contact_form_message' name="message" value={userData.message} onChange={handleInputs} placeholder='Message' cols="30" rows="5"></textarea>
                    </div>
                    <div className='contact_form_button'>
                      <button type="submit" className='button contact_submit_button' onClick={contactForm}>SEND MESSAGE</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact