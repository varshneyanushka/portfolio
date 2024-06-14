import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import p from '../assets/test/12.png';

import './Contact.css';

export const ContactTitle = () => {
  return (
    <div className="skititle">
      <h1>Let's Talk</h1>
      <hr className="divider" />
    </div>
  );
}

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const form = useRef();

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    emailjs
      .sendForm('service_nwhgx0w', 'template_woe3l0j', form.current, {
        publicKey: '9SQuBffMWTL-NmscJ',
      })
      .then(
        () => {
          setFormDetails(formInitialDetails);
          setStatus({ success: true, message: 'Message sent successfully!' });
          setButtonText('Send');
        },
        (error) => {
          setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
          setButtonText('Send');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact" id="connect">
      <Container size={9}>
        <Row className="align-items-center">
          <Col size={10} md={10} className="align-items-center">
            <div>
              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="firstName"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="lastName"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      name="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      name="phone"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      name="message"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                    ></textarea>
                    <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                  {status.message && (
                    <Col>
                      <p className={status.success ? "success" : "danger"}>{status.message}</p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={p} alt="Decorative" />
    </section>
  );
}

export default Contact;
