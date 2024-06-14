import React from 'react';
import { Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import p1 from "../assets/test/p1.png";
import p2 from "../assets/img/sum.png";
import p3 from "../assets/img/pos.png";
import t from "../assets/test/63.png";

import './Projects.css';

export const Title = () => {
    return (
        <div className="protitle">
            <h1>PROJECTS</h1>
            <hr className="divider" />
        </div>
    );
}

export const Projects = () => {
    return (
        <section className="project-section">
            <div className="layout-container">
                <Col className="left-side" xs={6} md={3} xl={2}> {/* Adjust these sizes based on your design */}
                    <img src={t} alt="Your Image" className="left-image" />
                </Col>
                <Col className="right-side" xs={12} md={9} xl={10}>
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <a href="https://eventwave-9bhy.onrender.com/" target="_blank" rel="noopener noreferrer">
                                <img src={p1} alt="First slide" />
                                <Carousel.Caption>
                                    <h3>Event Ticketing Platform</h3>
                                    <h4>Django, HTML, CSS, JS</h4>
                                    <p>A platform with authorization to help facilitate selling and buying of event tickets.</p>
                                </Carousel.Caption>
                            </a>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <a href="https://github.com/CynapticsAI/NewsFlash" target="_blank" rel="noopener noreferrer">
                                <img src={p2} alt="Second slide" />
                                <Carousel.Caption>
                                    <h3>Text Summarizer</h3>
                                    <h4>Python, Streamlit</h4>
                                    <p>Text summarizer made using Bart model from Hugging Face and Streamlit for frontend.</p>
                                </Carousel.Caption>
                            </a>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <a href="#">
                                <img src={p3} alt="Third slide" />
                                <Carousel.Caption>
                                    <h3>AV MART Point of Sale</h3>
                                    <h4>MySQL, Python</h4>
                                    <p>A DBMS project with inventory management and bill generation.</p>
                                </Carousel.Caption>
                            </a>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </div>
        </section>
    );
}

export default Projects;