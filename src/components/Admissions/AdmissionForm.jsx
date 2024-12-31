import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "./AdmissionForm.css";

const AdmissionForm = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Submit");
    const [userType, setUserType] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_bdfl0ie",
                "template_x7z6ogx",
                form.current,
                "CLcHWAKSemVMd1_sU"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setButtonText("Message Sent!");
                    setTimeout(() => {
                        setButtonText("Submit");
                    }, 4000);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
        setUserType(""); // Reset userType after submission
    };

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    return (
        <>
            <div className="bg">
                <section className="admissions-container container">
                    <div className="admissionsFormRight">
                        <div className="get_form_inner_text">
                            <h1>Let's Verify Your Insurance</h1>
                            <p>
                                <i>
                                    We'll keep your contact information strictly
                                    confidential.
                                </i>
                            </p>
                            <br />
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="inputs">
                                {/* Name */}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    pattern="[A-Za-z\s]+"
                                    title="Please enter a valid name using letters only."
                                />

                                {/* Email */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />

                                {/* Phone */}
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    required
                                    pattern="[+]?[\d\s]{10,15}"
                                    title="Please enter a valid phone number with 10 to 15 digits."
                                />

                                {/* Date of Birth */}
                                <label className="inputLabel">
                                    Date of Birth
                                </label>
                                <input className="dateOfBirth"
                                    type="date"
                                    name="dob"
                                    required
                                />

                                {/* Insurance Company */}
                                <input
                                    type="text"
                                    name="insuranceCompany"
                                    placeholder="Insurance Company Name"
                                    required
                                    pattern="[A-Za-z\s]+"
                                    title="Please enter a valid name using letters only."
                                />

                                {/* Policy Membership ID */}
                                <input
                                    type="text"
                                    name="membershipId"
                                    placeholder="Policy Membership ID"
                                    required
                                    pattern="[A-Za-z0-9\s-]+"
                                    title="Please enter a valid Membership ID."
                                />

                                {/* Group ID */}
                                <input
                                    type="text"
                                    name="groupId"
                                    placeholder="Group ID Number"
                                    required
                                    pattern="[A-Za-z0-9\s-]+"
                                    title="Please enter a valid Group ID."
                                />

                                {/* User Type */}
                                <label className="userTypeLabel">
                                    You are looking a rehab center for...
                                </label>
                                <select className="userOptions"
                                    name="userType"
                                    value={userType}
                                    onChange={handleUserTypeChange}
                                    required
                                >
                                    <option value="" disabled>
                                        Select
                                    </option>
                                    <option value="Myself">Myself</option>
                                    <option value="Parent">Parent</option>
                                    <option value="Friend">Friend</option>
                                </select>

                                {/* Message */}
                                <textarea
                                    name="message"
                                    placeholder="Please describe what treatement you are interested in."
                                    cols="30"
                                    rows="10"
                                    required
                                ></textarea>

                                {/* Submit Button */}
                                <input
                                    type="submit"
                                    value={buttonText}
                                    disabled={buttonText !== "Submit"}
                                />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AdmissionForm;
