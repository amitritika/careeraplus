import { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../../../config';
import { contactFormUserProfile } from '../../../../../actions/visualresume';
import Heading from "./Heading";
const Contact = (props) => {
  
  const [user, setUser] = useState({
    username: props.username.id,
    email: "",
    name: "",
    message: "",
    sucess: false,
    error: false,
    msg: ""
  })
  
  const { userEmail, message, name, email, success, error, msg } = user;

    const clickSubmit = e => {
        e.preventDefault();
        contactFormUserProfile(user).then(data => {
            if (data.error) {
                setUser({...user, error: true, msg: data.error});
                console.log(data.error)
            } else {
                setUser({
                    ...user,
                    name: '',
                    email: '',
                    message: '',
                    success: true
                });
            }
        });
    };

    const handleChange = name => e => {
        setUser({ ...user, [name]: e.target.value });
    };
  
  return (
    <Element name = {props.name} className = "fresher-template1-contact">
      <Heading name = "contact" bg = {props.bg} font = {props.font} />
      <div className = "row-v">
        <div className = "col-1-of-2">
          <div className = "fresher-template1-contact-details">
            <div className = "fresher-template1-contact-details__icon" style = {{backgroundColor: `${props.bg}`}}>
              <i className = "fas fa-phone"></i>
            </div>
            <div className = "fresher-template1-contact-details__text" style = {{color: `${props.font}`}}>
              {props.personal.phone}
              {props.personal.phone2Display && <span>, {props.personal.phone2}</span>}
            </div>
          </div>
          <div className = "fresher-template1-contact-details">
            <div className = "fresher-template1-contact-details__icon" style = {{backgroundColor: `${props.bg}` }}>
              <i className = "fas fa-home"></i>
            </div>
            <div className = "fresher-template1-contact-details__text" style = {{color: `${props.font}`}}>
              {props.personal.addressDisplay && <span style = {{fontSize: `1rem`}}>{props.personal.addressFull}</span>}
              {!props.personal.addressDisplay && <span>{props.personal.address}</span>}
            </div>
          </div>
          
        </div>
         <div className = "col-1-of-2">
           {!success && <form onSubmit={clickSubmit} className="fresher-template1-contact-form">
            <div className="fresher-template1-contact-form-group">
                <label className="fresher-template1-contact-form-lead">Message</label>
                <textarea
                    onChange={handleChange('message')}
                    type="text"
                    className="fresher-template1-contact-form-control"
                    value={message}
                    required
                    rows="10"
                    style = {{height:`auto`}}
                ></textarea>
            </div>

            <div className="fresher-template1-contact-form-group">
                <label className="fresher-template1-contact-form-lead">Name</label>
                <input type="text" onChange={handleChange('name')} className="fresher-template1-contact-form-control" value={name} required />
            </div>

            <div className="fresher-template1-contact-form-group">
                <label className="fresher-template1-contact-form-lead">Email</label>
                <input
                    type="email"
                    onChange={handleChange('email')}
                    className="fresher-template1-contact-form-control"
                    value={email}
                    required
                />
            </div>

            <div>
                <button className="fresher-template1-contact-form-btn" style = {{backgroundColor: `${props.bg}`}}>Send Message</button>
            </div>
        </form>}
           {success && <div className = "fresher-template1-contact-form-btn" style = {{backgroundColor: `${props.bg}`}}>Message Sent</div>}
           {error && <div className = "fresher-template1-contact-form-btn" style = {{backgroundColor: `red`}}>`${msg}`</div>}
        </div>
      
      </div>
      
    </Element>
  )
}

export default Contact;