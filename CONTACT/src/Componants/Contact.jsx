import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9af1f2ef-51da-48b2-b904-8283753b9ac0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success",
                text: "Message Send SuccessFully",
                icon: "success"
              });
        }
      };

  return (
   <section className='contact'>
    <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div className='input-box'>
           <label>Full Name:</label>
           <input type="text" className='field' placeholder='Enter Your Name' name='name' required/>
        </div>
        <div className='input-box'>
           <label>Email Address:</label>
           <input type="email" className='field' placeholder='Enter Your Email' name='email' required/>
        </div>
        <div className='input-box'>
           <label>Your Message:</label>
           <textarea name="message" id="" className='field mess' placeholder='Enter Your Message' required></textarea>
        </div>
        <button type="submit">Send Message</button>
    </form>
   </section>
  )
}

export default Contact