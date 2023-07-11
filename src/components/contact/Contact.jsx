import home from "../images/home.svg";
import mail from "../images/mail.svg";
import call from "../images/call.svg";
import "./contact.css";

function Contact(params) {
  return (
    <div className="map_div">
      <iframe
        title="map"
        src="https://snazzymaps.com/embed/486313"
        width="99%"
        height="280px"
        style={{ border: `2px solid  #FFCA42`, margin: `5px` }}
      ></iframe>
      <div className="contacts_contanier">
        <div className="contacts">
          <h2>Keep in Touch</h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            consequatur quod et rem quos modi iure omnis repellat fugiat?
            Assumenda atque totam quam magnam, deserunt fuga delectus ipsa
            doloribus expedita?
          </p>
          <div className="visit">
            <img src={home} alt="home" />
            <p className="contact_p">Visit Us :</p>
            <p className="direction_data">
              No: 09a, Downtown, San Dieago, USA.
            </p>
          </div>
          <div className="mail">
            <img src={mail} alt="mail" />
            <p className="contact_p">Drop Us :</p>
            <p className="mail_data">irenatagesyan@gmail.com</p>
          </div>
          <div className="call">
            <img src={call} alt="call" />
            <p className="contact_p">Call Us :</p>
            <p className="phone_data">095-699-170</p>
          </div>
        </div>
        <div className="contact_imputs">
          <form>
            <div className="label_div">
              <label htmlFor="name" className="name">
                Name
              </label>
              <label htmlFor="email" className="email">
                Email
              </label>
            </div>
            <div className="input_div">
              <input type="text" id="name" name="name" />

              <input type="email" id="email" name="email" />
            </div>
            <label htmlFor="phone" className="phone">
              Phone
            </label>
            <br />
            <input type="phone" id="phone" name="phone" />
            <br />
            <label htmlFor="message" className="message">
              Message
            </label>
            <br />
            <textarea name="message" id="message" />
          </form>
          <button className="send">Send Message</button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
