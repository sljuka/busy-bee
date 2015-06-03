import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({

  render() {
    return (
      <Row className="about-page">
        <Col xs={6} xsOffset={3} mdOffset={0} md={4} className="about-page__pic padding-bottom-large">
          <img src="images/slika_no_border.png"/>
        </Col>

        <Col xs={12} md={8}>   

          <p className="about-page__intro-text--padded">
            I am a software developer from Novi Sad, Serbia who loves to write software to build great products and help businesses succeed with their goals. I appreciate good design and I am seeing it's importance more than ever in todays apps, web sites and products.
          </p>

          <ul className="about-page__skill-list--padded">
            <li>
              <span className="bold">Web development: </span>Ruby, Javascript, various frameworks of said languages
            </li>
            <li>
              <span className="bold">Source code configuration:</span> GIT, SVN
            </li>
          </ul>

          <p className="about-page__intro-text">
            I worked with varous companies lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>

          <Button href="files/example.pdf" download className="about-page__cv-button" bsStyle="primary" bsSize="large">Curriculum Vitae</Button>

        </Col>
      </Row>
    );
  }
});
