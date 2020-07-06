import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const OpenSource = () => {
  const { opensource } = useContext(PortfolioContext);

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
          <Title title="Open Source Contributions" />
          {opensource.map((opensources) => {
            const { title, info, info2, url, repo, id } = opensource;

            return (
            <table>
              <Row>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Organization:'}<h2 className="project-wrapper__text-title"><a href="https://dvc.org/">DVC.org</a></h2></h3>
                      <div>
                        <p>
                          <b>o</b> {info ||
                            'Worked on improving parts of the documentation of'} <b> DVC </b> for its new release of the version 1.0.
                        </p>
                        <p>
                          <b>o</b> {info ||
                            'Added Example for interaction of'}<b> dvc add</b> with <b>Dvcignore</b>. <a href="https://github.com/iterative/dvc.org/pull/1346" aria-label="link">PR <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        </p>

                        <p>
                          <b>o</b> {info ||
                            'Updated the documentation corresponding to'} <b>dvc repro</b> command.  <a href="https://github.com/iterative/dvc.org/pull/1504" aria-label="link">PR <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        </p>

                        <p>
                          <b>o</b> {info ||
                            'Updated the tutorial under'} <b>Use Cases</b> <a href="https://github.com/iterative/dvc.org/pull/1526" aria-label="link">PR <FontAwesomeIcon icon={faExternalLinkAlt} /></a>.
                        </p>
                      </div>
                    </div>
                  </Fade>
                </Row>
                <Row>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Organization:'}<h2 className="project-wrapper__text-title"><a href="https://dvc.org/">matplotlib.org</a></h2></h3>
                      <div>
                        <p>
                          <b>o</b> {info ||
                            'Worked on improving the documentation of'} <b> matplotlib </b>.
                        </p>
                        <p>
                          <b>o</b> {info ||
                            'Opened a PR to add a tutorial on the'}<b> autoscaling </b> feature offered by matplotlib. <a href="https://github.com/matplotlib/matplotlib/pull/17530" aria-label="link">PR <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        </p>
                      </div>
                    </div>
                  </Fade>
                </Row>

            </table>
          );
        })}
        </div>
      </Container>
    </section>
  );
};

export default OpenSource;
