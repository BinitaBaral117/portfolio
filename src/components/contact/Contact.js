import React, { useRef } from "react";
import { AiFillFacebook, AiOutlineInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_aby4lqq",
        "template_arxerka",
        formRef.current,
        "9ckf-Hg2xP6PONv_AHSpK"
      );

      console.log(result.text);
      e.target.reset();
      alert("Email Sent");
    } catch (error) {
      console.error(error.text);
    }
  };

  return (
    <section className="contactpage">
      <div id="contact">
        <h1 className="contactpagetitle">Contact Me</h1>
        <p className="contactdesc">
          Please fill out the form below to discuss any work opportunities.
        </p>

        <form className="contactform" ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
            required
          />

          <input
            type="email"
            className="email"
            placeholder="example@gmail.com"
            name="your_email"
            required
          />

          <textarea
            className="message"
            cols="30"
            rows="10"
            placeholder="Your Message Here"
            required
          ></textarea>

          <button type="submit" className="submitbutton">
            Submit
          </button>

          <div className="links">
            <a
              href="https://www.facebook.com/profile.php?id=61552909262807"
              target="_blank"
              rel="noopener noreferrer"
              className="facebooklink"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.instagram.com/binitabaral117/"
              target="_blank"
              rel="noopener noreferrer"
              className="instalink"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/binita-baral-4052a820a/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedinlink"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/BinitaBaral117"
              target="_blank"
              rel="noopener noreferrer"
              className="githublink"
            >
              <AiFillGithub />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
