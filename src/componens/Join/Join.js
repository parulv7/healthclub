import React, { useRef } from 'react'
import "./Join.css";
import emailjs from '@emailjs/browser';
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_i3djhik', 'template_afdntlx', form.current, 'DISz9PPAsyyN4ekeu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Join" id='join-us'>

<div className='left-j'>
<hr/>
<div>
    <span className='stroke-text'>READY TO</span>
    <span> LEVEL UP</span>
</div>
<div>
    <span>YOUR BODY</span>
    <span className='stroke-text'> WITH US?</span>
</div>
</div>


<div className='right-j'>
    <form ref={form} className='email-container' onSubmit={sendEmail}>
    {/* <form  className='email-container' > */}
        <input type="email" name="user_email" placeholder='Enter Your Email Address'/>
        <button className='btn btn-j'>Join now</button>
    </form>
</div>
    </div>
  )
}

export default Join