import React from 'react'
import './PrivacyPolicySection.css'
import { BsDot } from "react-icons/bs";

const PrivacyPolicySection = () => {
  return (
    <>
      
        <div className='privacyPolicySection container'>

            <div className='privacyPolicySectionContent'>
                    <div className='privacyPolicyDate'>
                    <p>Effective Date: June 26, 2024</p>
                    </div>
                    <br/>
                    <p><b>Thrive Wellness Group</b> ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://RenewalRecovery.biz/ (the "Site"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.</p>
            </div>

            <div className='privacyPolicyBullet'>

                <h1>1. Information We Collect</h1>
                <h2>Personal Data:</h2>
                <p>We may collect personally identifiable information (PII) that you provide to us when you register on the Site, submit an application, subscribe to our newsletter, fill out a form, or otherwise enter information. This may include your name, email address, phone number, and other contact details.</p>


                <h2>Non-Personal Data:</h2>
                <p>We may collect non-personally identifiable information about you whenever you interact with our Site. This may include the browser name, the type of computer, and technical information about your means of connection to our Site, such as the operating system and the Internet service providers utilized, and other similar information.</p>

                <h1>2. How We Use Your Information</h1>
                <h2>We use the information we collect in the following ways:</h2>
                <p><BsDot /> To Improve Our Website: We continually strive to improve our website offerings based on the information and feedback we receive from you.</p>
                <ul>
                    <li>
                    <p><BsDot /> To Process Transactions: Your information helps us to more effectively respond to your customer service requests and support needs.</p>
                    </li>

                    <li><p><BsDot /> To Send Periodic Emails: The email address you provide may be used to send you information and updates pertaining to your application, in addition to receiving occasional company news, updates, related product or service information, etc.</p></li>
                </ul>

                <h1>3.  How We Protect Your Information</h1>
                <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.</p>
                
                <h1>4.  Sharing Your Information</h1>
                <p>We do not sell, trade, or rent users'</p>

                <h1>5.  Text message communications.</h1>
                <p>We use text messaging to communicate with you about your service. Normal messaging rates apply and the frequency of messages may vary. Mobile Carriers are not liable for delayed or undelivered messages. 
                </p><br />
                <p>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
                
                <h1>6.  Opt-out of text message communications.</h1>
                <p>You may opt out of text messaging at any time by replying to any message with STOP or contacting us at Info@RenewalRecovery.biz. This will end the communications from that particular phone number. You may continue to receive service-related and other non-marketing text messages from other phone numbers managed by Company, and you may opt out of those in a similar fashion.
                </p>
            </div>


        </div>

    </>
  )
}

export default PrivacyPolicySection
