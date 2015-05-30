import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({

  render() {
    return (
      <div className="container">
        <Row className="about-page__main-row">
          <Col xs={4}>
            <img src="images/slika.png"/>
          </Col>

          <Col className="about-page__intro-text" xs={8}>
            <p>
              I am a software developer from Novi Sad, Serbia who loves to write software to build great products and help businesses succeed with their goals. I appreciate good design and I am seeing it's importance more than ever in todays apps, web sites and products.
            </p>
            <ul className="about-page__main-row__skill-list">
              <li>
                <span className="bold">Web development: </span>Ruby, Javascript, various frameworks of said languages
              </li>
              <li>
                <span className="bold">Source code configuration:</span> GIT, SVN
              </li>
            </ul>
            <p>
              I worked with varous companies lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
          </Col>
        </Row>

        <Row className="about-page__button-row">
          <Col xs={8} xsOffset={4}>
            <Button className="about-page__button-row__cv-button" bsStyle="primary" bsSize="large">Curriculum Vitae</Button>
          </Col>
        </Row>

      </div>
    );
  }
});
