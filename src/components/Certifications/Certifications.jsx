import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
const Certifications = () => {


  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Certifications" />
              <Row>
                <Col lg={10} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                    <p> <b>o</b>  How Google Does machine Learning <a href="https://www.coursera.org/account/accomplishments/certificate/BN3F2VXSTYCV" aria-label="link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
                    <p> <b>o</b>  Google Cloud Platform Big Data and Machine Learning Fundamentals <a href="https://www.coursera.org/account/accomplishments/certificate/TFELZHUUSHEL" aria-label="link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
                    <p> <b>o</b>  Launching into Machine Learning <a href="https://www.coursera.org/account/accomplishments/certificate/QNKBKGZ35WRU" aria-label="link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
                    <p> <b>o</b>  Neural Networks and Deep Learning <a href="https://www.coursera.org/account/accomplishments/certificate/FBYWLZYSDJ7X" aria-label="link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
                    <p> <b>o</b>  Imporving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization <a href="https://www.coursera.org/account/accomplishments/certificate/UUGE6SLGNHYG" aria-label="link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
                    <p> <b>o</b>  Structuring Machine Learning Projects <a href="https://www.coursera.org/account/accomplishments/certificate/FQ8V5LMK9DG9" aria-label="link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
                    <p> <b>o</b>  Introduction to Tensorflow for Artificial Intelligence, Machine Learning, and Deep Learning <a href="https://www.coursera.org/account/accomplishments/certificate/TPYMYJ2RG2F9" aria-label="link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
                    <p> <b>o</b>  Convolutional Neural Networks <a href="https://www.coursera.org/account/accomplishments/certificate/8MQMJLRYFZD5" aria-label="link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
                    <p> <b>o</b>  Convolutional Neural Networks in Tensorflow <a href="https://www.coursera.org/account/accomplishments/certificate/2ST2L7VLLV3R" aria-label="link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
                    <p> <b>o</b>  Natural Language Processing in TensorFlow <a href="https://www.coursera.org/account/accomplishments/certificate/KD9S3F8KEWZK" aria-label="link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
                    <p> <b>o</b>  Sequence Models <a href="https://www.coursera.org/account/accomplishments/certificate/W6ZSMLXM8NLU" aria-label="link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></p>
                     </div>
                  </Fade>
                </Col>
            </Row>
        </div>
      </Container>
    </section>
    );
};

export default Certifications;
