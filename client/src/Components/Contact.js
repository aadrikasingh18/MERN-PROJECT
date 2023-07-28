import React from 'react'
// import './Contact.css'

const Contact = () => {
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
                        180-800-111
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
                        xyz@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className='contact_info_item d-flex justify-content-start align-items-center'>
                    <i class="zmdi zmdi-pin"></i>
                    <div className='contact_info_content'>
                      <div className='contact_info_title'>
                        Address
                      </div>
                      <div className='contact_info_text'>
                        Perth
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
                  <h4>
                    GET IN TOUCH
                  </h4>
                  <form id="contact_form">
                    <div className="contact_form_all">
                      <input type="text" id="contact_form_name" className='contact_form_name input_field' placeholder='Your Name' required="true" />

                      <input type="email" id="contact_form_email" className='contact_form_email input_field' placeholder='Your Email' required="true" />

                      <input type="number" id="contact_form_phone" className='contact_form_phone input_field' placeholder='Your Phone Number' required="true" />
                    </div>
                    <div className="contact_form_text mt-3">
                      <textarea className='text_field contact_form_message' placeholder='Message' cols="50" rows="8"></textarea>
                    </div>
                    <div className='contact_form_button'>
                      <button type="submit" className='button contact_submit_button'>SEND MESSAGE</button>
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