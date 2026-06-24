import { useState } from "react";
import "./cn.css";
import msg from "../../assets/msg-icon.png";
import ml from "../../assets/mail-icon.png";
import pn from "../../assets/phone-icon.png";
import lc from "../../assets/location-icon.png";
import wh from "../../assets/white-arrow.png";
const Ct = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a0c704c3-aace-450c-a411-7365b372b24a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="cn" id="ct">
      <div className="col">
        <h3>
          Send us a message <img src={msg} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedbacks,questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={ml} alt="" /> Mubarak@gmail.com
          </li>
          <li>
            <img src={pn} alt="" /> 09041571554
          </li>
          <li>
            <img src={lc} alt="" /> 17 Oke-sobi,Ogbagba <br />
            Osun State
          </li>
        </ul>
      </div>
      <div className="col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label htmlFor="">Write your messages here</label>
          <textarea
            name="message"
            rows={16}
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dk">
            Submit now <img src={wh} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Ct;
// web3forms.com
