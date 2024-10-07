import React from 'react'


function Contact() {
  return (
    <div>
      <section className="ContactSection">
        <div className="contact">
          <div className="cardcontact">
            <div className="contactInfo">
              <p><h1>CONTACT ME</h1></p>

              <div className="mobile"><p><img src="call.png" height={28} width={28} alt="" />  +91 98191 84556</p></div>
              <div className="mail"><p><a href="mailto:jaisingh09520@gmail.com" ><img src="gmail.png" height={28} width={28} alt="" />    jaisingh09520@gmail.com</a></p></div>
              <div className="linkedin"><p><a href="www.linkedin.com/in/jai-singh-24b24a298"><img src="linkedin.png" height={28} width={28} alt="" />  Linked in</a></p></div>
              <div className="social"><p><a href="https://www.instagram.com/rajput_jai005/"><img src="social.png" height={28} width={28} alt="" />  Instagram</a></p></div>

            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact
