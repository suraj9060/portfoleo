import "./contact.css";
import Picon from "../../image/phone-icon.png";
import Eicon from "../../image/email.png";
import Aicon from "../../image/address.jpg";
import { useRef , useState} from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const[done,setDone] = useState(false)
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zbjnptj",
        "template_04wj1j9",
        formRef.current,
        "user_8gn8wGWGWmZF7QsIQDplc"
      )
      .then(
        (result) => {
              console.log(result.text);
              setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Get in Touch</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Picon} alt="" className="c-icon" />
              <div>+91 9504648021 </div>
              <p>+91 9060488004</p>
            </div>
            <div className="c-info-item">
              <img src={Eicon} alt="" className="c-icon" />
               surajpandit831996@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Aicon} alt="" className="c-icon" />
               ward-No:-16 ,Pipra, , Begusarai , Bihar 851117
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's Your Story?</b>Get in touch. 
          </p>
          <form action="" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="email" placeholder="xyz@email.com" name="user_email" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Massage"
            ></textarea>
                      <button>Submit</button>
                      {done && "Thank you for connection..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
