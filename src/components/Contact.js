import React from "react";
import emailjs from "emailjs-com";
import "../css/contact.css"
import Navigation from "./Navigation";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rp0nkhq",
        "template_f0su0t1",
        e.target,
        "user_qWYzySIIYWT3W9itB9iJn"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
 
   
    <div className="container contact">
      <h1 style={{marginTop:"3rem",marginBottom:"3rem", textAlign:"center"}}>Contact Form</h1>

      <form className="row" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" className="form-control" />

        <label>Email</label>
        <input type="email" name="user_name" className="form-control" />

        <label>Message</label>
        <textarea name="message" rows="3" className="form-control" />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-dark"
        />
      </form>
    </div>
  );
};

export default Contact;
