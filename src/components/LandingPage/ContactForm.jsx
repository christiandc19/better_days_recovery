import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import './ContactForm.css';
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import ContactUs from '../../assets/about-us-section-image.webp'

const ContactForm = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Submit");

    const sendEmail = (e) => {
        e.preventDefault();

        // Change button text after form submission
        setButtonText("Message Sent");

        // Send the email using EmailJS
        emailjs.sendForm('service_bdfl0ie', 'template_4lmc4or', form.current, 'CLcHWAKSemVMd1_sU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className="contactForm">

                <div className="contact-content container">

                    <div className="form-image">
                        <img src={ContactUs} alt="Call Us" loading="lazy"/>
                    </div>

                    <div className="footer_get_touch_inner">

                        <div className="get_form_inner">

                            <form ref={form} onSubmit={sendEmail}>

                                <div className="inputs">

                                <h1>Start Your Recovery Today</h1>
                                <p>We'll keep your contact information strictly confidential.</p>

                                    <div className="input-flex">

                                        <div className="input-flex-item">
                                            <label>Name</label>
                                            <input 
                                                type="text" 
                                                name='name' 
                                                placeholder='First Name' 
                                                required 
                                                pattern="[A-Za-z\s]+"
                                                title="Please enter a valid name using only letters." 
                                            /> 
                                        </div>

                                        <div className="input-flex-item">
                                            <label>Last Name</label>
                                                <input 
                                                type="text" 
                                                name='name' 
                                                placeholder='Last Name (optional)' 
                                            /> 
                                        </div>

                                    </div>

                                    <br />

                                    <div className="input-flex">
                                    
                                    <div className="input-flex-item">
                                    <label>Email</label>
                                        <input 
                                            type="email" 
                                            name='email' 
                                            placeholder='Email' 
                                            required 
                                        /> 
                                       </div>

                                       <div className="input-flex-item">
                                       <label>Phone</label>
                                        <input 
                                            type="tel" 
                                            name='phone' 
                                            placeholder='Phone' 
                                            pattern="[0-9]*" 
                                            maxLength="15" 
                                            required 
                                            title="Please enter a valid phone number." 
                                        /> 
                                        </div>
                                    </div>



                                    <br />
                                    <label>Subject</label>
                                    <input 
                                        type="text" 
                                        name='subject' 
                                        placeholder='Subject' 
                                        required 
                                    /> <br/>
                                </div>
                                <div>
                                    <label>Message</label>

                                    <textarea 
                                        name="message" 
                                        placeholder="Message" 
                                        cols="30" 
                                        rows="10" 
                                        required
                                    ></textarea>

                            <div className="disclaimer">
                              <p>Tree Of Live Rehab needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our  
                              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                  <Link to="/privacy-policy"><span> Privacy Policy </span></Link>
                              </LinkRoll></p>
                            </div>


                                    <input type="submit" value={buttonText} />
                                </div>
                            </form>
                        </div>
                    </div>


                </div>









        </div>
    );
}

export default ContactForm;
