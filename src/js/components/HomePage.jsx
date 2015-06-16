import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default React.createClass({

  render() {
    return (
      <Row className="home-page">
        <Col xs={12}>
          <div className="home-page__greeting-panel">
            <h1 className="home-page__greetings">Hello!</h1>
            <p className="home-page__paras">
              I'm David. I'm an software engineer
            </p>
            <p className="home-page__paras">
              and I'm looking forward to working with you!
            </p>
          </div>
        </Col>
      </Row>
    );
  }
});
