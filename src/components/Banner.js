import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import vid from "../assets/video/bg_stars.mp4";
import './Banner.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = ["a Coder", "a Web Developer", "a Flutist", "a Dancer", "an Engineer", "a Movie Buff", "a Judoka"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <video className="background-video" src={vid} autoPlay loop muted></video>
      <Container>
        <Row className="align-items-center">
          <Col className="content" xs={12} md={6} xl={7}>
            <span className="tagline">Hello humble traveller</span>
            <h1>{`I'm Anushka Varshney `}</h1>
            <h1><span className="wrap"> I am {text}</span></h1>
            <p>I am a techie, pursuing my engineering from IIT Indore.</p>
            <button onClick={() => console.log('connect')}>
              Get to know more about my technical skills <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col className="content" xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
};
