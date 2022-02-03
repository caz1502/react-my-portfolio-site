import React from "react";
import emailjs from "emailjs-com";


const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_rp0nkhq",
      "template_f0su0t1",
      e.target,
      "user_qWYzySIIYWT3W9itB9iJn"
    ).then(res => {
      console.log(res);
    }).catch(err=> console.log(err));
  }
  return (
    <div
      className="container " style={{backgroundColour:"#ADA996"}}>
      <h1 style={{textAlign:"center"}}>Contact Form</h1>

      <form
        className="row"
        style={{ margin: "20px 80px 70px 100px" }}
        onSubmit={sendEmail}
      >
        <label style={{ marginBottom: "10px" }}>Name</label>
        <input type="text" name="name" className="form-control" />

        <label style={{ marginBottom: "10px", marginTop:"10px" }}>Email</label>
        <input type="email" name="user_name" className="form-control" />

        <label style={{ marginBottom: "10px",marginTop:"10px" }}>Message</label>
        <textarea name="message" rows="10" className="form-control" />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-dark"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
}

export default Contact;

