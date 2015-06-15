import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({

  render() {
    return (
      <Row className="about-page">
        <Col xs={8} xsOffset={2} mdOffset={0} md={4} className="about-page__pic padding-bottom-large">
          <img src="images/slika_no_border.png"/>

          <div className="about-page__cv">
            <Button href="files/david_sljukic_CV.pdf" download className="about-page__cv__button" bsStyle="primary" bsSize="large">curriculum vitae</Button>
          </div>
        </Col>

        <Col xs={12} md={8}>   

          <h2 className="about-page__info-title">ABOUT ME</h2>
          <p className="about-page__intro-text--padded">
            I am a software developer from Novi Sad, Serbia who loves to write software to build great products and help businesses succeed with their goals. I appreciate good design and I am seeing it's importance more than ever in todays apps, web sites and products.
          </p>

          <h2 className="about-page__info-title">MY SKILLS</h2>
          <ul className="about-page__skill-list--padded">
            <li>
              <span className="bold">Web development: </span>Ruby, Javascript, various frameworks of said languages
            </li>
            <li>
              <span className="bold">Source code configuration:</span> GIT, SVN
            </li>
          </ul>

          <h2 className="about-page__info-title">MY STYLE</h2>
          <p className="about-page__intro-text">
            I worked with varous companies lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>

        </Col>
      </Row>
    );
  }
});
