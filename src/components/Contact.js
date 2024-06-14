import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import React, { useRef } from 'react';
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


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nwhgx0w', 'template_woe3l0j', form.current, {
        publicKey: '9SQuBffMWTL-NmscJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const success=()=>
  {
      
  }



  return (
    <section className="contact" id="connect">
      <Container size={9}>
        <Row className="align-items-center">
          <Col size={10} md={10} className="align-items-center">
            <div>
              
              <form ref={form} onSubmit={sendEmail}
        action="">
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" name="firstname" placeholder="First Name"  />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" name="lastname" placeholder="Last Name"  />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" name="email" placeholder="Email Address" />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" name="phone" placeholder="Phone No." />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" name="message" placeholder="Message"></textarea>
                    <button type="submit" OnClick={success}><span>send</span></button>
                  </Col>
                 
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
