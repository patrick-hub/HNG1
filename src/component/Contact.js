import React from "react";
import Footer from "./Footer";

export default function contact() {


  return <div className="container mt-5">

    <h2 className="d-flex justify-content-start mx-2">Contact Me</h2>
    <p className="d-flex justify-content-start mx-3">Hi there, contact me to ask me about anything you have in mind.</p>

    <form className="container row g-3 form">
  <div className="col-md-6">
    <label htmlFor="first_name" className="form-label d-flex justify-content-start">First Name</label>
    <input type="text" className="form-control input_text mb-3" id="first_name" placeholder="Enter your first name" required/>
  </div>
  <div className="col-md-6">
    <label htmlFor="last_name" className="form-label d-flex justify-content-start">Last Name</label>
    <input type="text" className="form-control input_text mb-3" id="last_name"  placeholder="Enter your last name"  required/>

  </div>
  <div className="col-12">
    <label htmlFor="email" className="form-label d-flex justify-content-start">Email</label>
    <input type="email" className="form-control input_text  mb-3" id="email" placeholder="yourname@name.com"  required/>

  </div>

  <div className=" col-12">
  <label htmlFor="message" className="form-label d-flex justify-content-start">Message</label>
  <textarea className="form-control input_text mb-3" id="message" rows="3" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>


</div>

  <div className="col-12">
    <div className="form-check d-flex justify-content-start ">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label mb-3" htmlFor="gridCheck">
      You agree to providing your data to patrick who may contact you
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn message_btn btn-primary col-12 p-3" id="btn__submit"> Send Message</button>
  </div>
</form>
<Footer className="container mt-5"/>
  </div>;
}
