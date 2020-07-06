import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';
import { githubButtons } from '../../mock/data';



const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
              <Row>
                <a
                  key={1}
                  href={url || 'https://twitter.com/Sarthak60130220'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={"twitter"}
                >
                  <i className={`fa fa-${"twitter" || 'refresh'} fa-inverse`} />
                </a>
                <a
                  key={2}
                  href={url || 'https://medium.com/@sarthakkhandelwal032000'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={"medium"}
                >
                  <i className={`fa fa-${"medium" || 'refresh'} fa-inverse`} />
                </a>
                <a
                  key={3}
                  href={url || 'https://www.linkedin.com/in/sarthak-khandelwal-88757b174/'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={"linkedin"}
                >
                  <i className={`fa fa-${"linkedin" || 'refresh'} fa-inverse`} />
                </a>
                <a
                  key={4}
                  href={url || 'https://github.com/sarthakforwet'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={"github"}
                >
                  <i className={`fa fa-${"github" || 'refresh'} fa-inverse`} />
                </a>
                <a
                  key={5}
                  href={url || 'https://www.kaggle.com/forwet'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={"kaggle"}
                >
                  <i class="fa fa-kaggle">k</i>
                </a>
              </Row>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Base Template by{' '}
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>
        </p>
        </Container>
    </footer>
  );
};

export default Footer;
