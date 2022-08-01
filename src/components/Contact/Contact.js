import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" name="contact">
      <h1>CONTACT ME</h1>
      <div className="contactMe">
        <div className="contact__text">
          <h4>
            I am interested in working with any company that thinks my skill
            will be helpful for them. If you are looking for someone like me,
            please let me know. Or you can just 'say hi' to me.
          </h4>
        </div>
        <div className="contact__details">
          <p>
            Email : <span>ganeshkalyan506@gmail.com</span>
          </p>
          <p>
            Github : <span>https://github.com/ganeshkalyan7</span>
          </p>
          <p>
            MobileNumber: <span> 9490623110 </span>
          </p>
          <p>
            Linkedin:{" "}
            <span> https://www.linkedin.com/in/r-ganesh-372b38227</span>
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
