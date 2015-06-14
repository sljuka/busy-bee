import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default React.createClass({

  render() {
    return (
      <Row>
        <Col xs={12}>
          <div className="welcome">
            <p className="welcome-title">
              HELLO! I AM DAVID.
            </p>

            <p className="welcome-message">
              I am an <span className="green bold">IT engineer.</span> I am looking forward to helping you!
            </p>
          </div>
        </Col>
      </Row>
    );
  }
});
