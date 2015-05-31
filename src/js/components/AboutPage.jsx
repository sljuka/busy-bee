import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({

  render() {
    return (
      <div className="container">
        <Row className="about-page__main-row">
          <Col xs={6} xsOffset={3} mdOffset={0} md={4} className="about-page__pic">
            <img src="images/slika.png"/>
          </Col>

          <Col className="about-page__intro-text" xs={12} md={8}>
            <Row className="about-page__info-row--padded">
              <Col xs={2}>
                <img src="images/about_circle.png"/>
              </Col>
              <Col xs={10}>              
                <p>
                  I am a software developer from Novi Sad, Serbia who loves to write software to build great products and help businesses succeed with their goals. I appreciate good design and I am seeing it's importance more than ever in todays apps, web sites and products.
                </p>
              </Col>
            </Row>
            <Row className="about-page__info-row--padded">
              <Col xs={2}>
                <img src="images/skills_circle.png"/>
              </Col>
              <Col xs={10}>
                <ul className="about-page__main-row__skill-list">
                  <li>
                    <span className="bold">Web development: </span>Ruby, Javascript, various frameworks of said languages
                  </li>
                  <li>
                    <span className="bold">Source code configuration:</span> GIT, SVN
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="about-page__info-row">
              <Col xs={2}>
                <img src="images/experience_circle.png"/>
              </Col>
              <Col xs={10}>
                <p>
                  I worked with varous companies lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="about-page__button-row">
          <Col xs={8} xsOffset={4} mdOffset={4}>
            <Button className="about-page__button-row__cv-button" bsStyle="primary" bsSize="large">Curriculum Vitae</Button>
          </Col>
        </Row>

      </div>
    );
  }
});
