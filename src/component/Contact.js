import React from "react";
import { useRef, useState } from "react";
import Footer from "./Footer";

const isEmpty = value => value.trim() === '';

export default function Contact() {

    const [formInputValidity, setFormInputValidity] = useState({
        firstName:true,
        lastName: true,
        email: true,
        message: true
    });

    const firstNameInputRef = useRef()
    const lastNameInputRef = useRef()
    const emailInputRef = useRef()
    const messageInputRef = useRef()


    const submitHandler = (event) => {
        
        event.preventDefault()

        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;
        const enteredemail = emailInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;

        const enteredFirstNameIsValid = !isEmpty(enteredFirstName)
        const enteredLastNameIsValid = !isEmpty(enteredLastName)
        const enteredemailIsValid = !isEmpty(enteredemail)
        const enteredMessageIsValid = !isEmpty(enteredMessage)

        setFormInputValidity ({
            firstName: enteredFirstNameIsValid,
            lastName: enteredLastNameIsValid,
            email: enteredemailIsValid,
            message: enteredMessageIsValid
        });

        const formIsValid = enteredFirstNameIsValid && enteredLastNameIsValid && enteredemailIsValid && enteredMessageIsValid;



        if (!formIsValid) {
            return;
        }
    }

  return <div className="container mt-5">

    <h2 className="d-flex justify-content-start mx-2">Contact Me</h2>
    <p className="d-flex justify-content-start mx-3">Hi there, contact me to ask me about anything you have in mind.</p>

    <form className="container row g-3 form" onSubmit={submitHandler}>
  <div className="col-md-6">
    <label htmlFor="name" className="form-label d-flex justify-content-start">First Name</label>
    <input type="text" className="form-control" id="first_name" ref={firstNameInputRef} required/>
    {!formInputValidity.firstName && <p className="d-flex justify-content-start text-danger">Please Enter Your First Name</p>}
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label d-flex justify-content-start">Last Name</label>
    <input type="text" className="form-control" id="last_name" ref={lastNameInputRef} />
    {!formInputValidity.lastName && <p className="d-flex justify-content-start text-danger">Please Enter Your Last Name</p>}

  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label d-flex justify-content-start">Email</label>
    <input type="email" className="form-control" id="email" placeholder="123@gmail.com" ref={emailInputRef} />
    {!formInputValidity.email && <p className="d-flex justify-content-start text-danger">Please Enter a Your Email</p>}

  </div>

  <div className=" col-12">
  <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex justify-content-start">Message</label>
  <textarea className="form-control" id="message" rows="3" placeholder="Send me a message and I'll reply you as soon as possible..." ref={messageInputRef} ></textarea>
  {!formInputValidity.message && <p className="d-flex justify-content-start text-danger">Please Type in Your Message</p>}

</div>

  <div className="col-12">
    <div className="form-check d-flex justify-content-start ">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
      You agree to providing your data to patrick who may contact you
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary col-12" id="btn__submit"> Send Message</button>
  </div>
</form>
<Footer className="mt-5"/>
  </div>;
}
