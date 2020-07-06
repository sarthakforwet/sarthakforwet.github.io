import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
            <table>
    {/* Project-1 */}
              <Row>
                <Col lg={6} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'YoloV3 Custom Object Detector'}</h3>
                      <div>
                        <p>
                          {info ||
                            'A Custom Object Detector that is built upon tensorflow framework and OpenCV ( for predictions ). This project help developers train and run their own object recognition model with custom dataset. This model is trained with YOLOV3 algorithm. The project repo involves a pretty straight forward guide to help developers who are new to object detection or having less experience working with pretrained models easily train and run the detector. The training guide executes on Google Colab and a developer is required to have prior experience to Colab.'}
                        </p>
                        <p className="mb-4">{info2 || 'Future work would involve hosting a Github Page for a guide to this project, build a UI for the detector to be used for production and also for increasing interactivity and generalize the scripts better for taking inputs.'}</p>
                      </div>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={"https://github.com/sarthakforwet/YoloV3_Object_Detector"}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={6} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename="Jerry_Object_detection.jpeg" />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
    {/* Project-2 */}
              <Row>
                <Col lg={6} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Fake News Detector'}</h3>
                      <div>
                        <p>
                          {info ||
                            'A pretty decent binary classification model built over tensorflow and scikit-learn to detect if a news is fake or not. NLTK library is used for text pre-processing and vocabulary generation. Two approaches viz RandomForestClassifier and Neural Networks ( LSTM(s) ) are applied which builds two different models. '}
                        </p>
                        <p>{info2 || 'Future work would involve implementation of'}<a color="pink" href="https://arxiv.org/pdf/1805.08751.pdf">{ info || ' FAKEDETECTOR: Effective Fake News Detection with Deep Diffusive Neural Network'}</a>{ info || ' to improve the model architecture and accuracy.'} </p>
                      </div>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={'https://github.com/sarthakforwet/FakeNews'}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={6} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename="fake.jpg" />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
    {/* Project-3 */}
              <Row>
                <Col lg={6} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'API Calculator'}</h3>
                      <div>
                        <p>
                          {info ||
                            'A Database Management Project which maintains the data of faculties to calculate their API (Academic Progress Indicator). Database design and data entry has been done in this project but calculation of API is remaining. An option is also provided for faculties to download their API report as an excel sheet.'}
                        </p>
                        <p>{info2 || 'Future work would involve implementation of API calculation and improving interface.'}</p>
                      </div>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={'https://github.com/sarthakforwet/API_Calculator'}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={6} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename="API_calc.png" />
                          </div>
                          <p> Img Source <a href="https://bit.ly/2BH611n">here</a></p>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
    {/* Project-4 */}
              <Row>
                <Col lg={6} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Live Sketcher'}</h3>
                      <div>
                        <p>
                          {info ||
                            'A project built upon'} <b>OpenCV</b> which produces dynamic sketch of a user.
                        </p>
                        <p>{info2 || 'This project would give developers a live sketching feature which they can embed into more complex computer vision applications.'}</p>
                      </div>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={'https://github.com/sarthakforwet/DynamicSketching'}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={6} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename="LiveSketch.jpg" />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
    {/* Project-5 */}
              <Row>
                <Col lg={6} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Interface Assistant'}</h3>
                      <div>
                        <p>{info || 'This project aims on building a Rule based voice assistant. It also includes an interface ( built upon pygame library ) for the communication of assistant and the user. Currently it has support for searching content on wikipedia and display that on the interface. Your just need to run it and ask about anything that wikipedia could get an answer for and it would display and read the searched result for you.'}</p>
                        <p> You would need an internet connection to run this Interface Assistant.</p>
                        <p>
                          {info2 ||
                            'Future work on this project would involve implementing more functions, building more interactive UI and adding more features to the UI.'}
                        </p>
                      </div>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={'https://github.com/sarthakforwet/Interface_Assistant'}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={6} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename="cyber.jpg" />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </table>
          );
        })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
