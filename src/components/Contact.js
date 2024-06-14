import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const PORT = process.env.REACT_APP_PORT || 5000;
    try {
      let response = await fetch(`http://localhost:${PORT}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
      console.error('Failed to fetch:', error);
    }
    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container size={9}>
        <Row className="align-items-center">
          <Col size={10} md={10} className="align-items-center">
            <div>
              
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                    <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                  {
                    status.message &&
                    <Col>
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                  }
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={p} alt="Decorative"  />
    </section>
  );
}
