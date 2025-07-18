import React from "react";
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'    
import location_icon from '../../assets/location_icon.svg'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "532ee12f-430b-4eea-97d6-c42875e99923");
    
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
          window.location.reload();
          alert("Message Sent Successfully!");
        }
      };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Feel free to reach out with any inquiries, collaboration ideas, or project opportunities.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>alapatisaradhi@mictech.edu.in</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+91 7382692747</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Vijayawada, Andhra Pradesh, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlfor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlfor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" rows="8" placeholder="Enter Your Message"></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;