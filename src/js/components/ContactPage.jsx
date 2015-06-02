import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';

export default React.createClass({

  render() {

    var gtooltip = <Tooltip>somemail@gmail.com</Tooltip>;
    var stooltip = <Tooltip><b>Skype ID: </b>david.sljukic</Tooltip>;
    var ftooltip = <Tooltip>facebook.com/sljukic</Tooltip>;

    return (
      <div className="page container">
        <Row className="contact-page__inputs contact-page__main-row">

          <Col xs={12} md={6}>
            <Row className="contact-page__contact-circles">
              <Col xs={9} xsOffset={3}>

                <OverlayTrigger placement="top" overlay={gtooltip} trigger="click">
                  <img src="images/google_circle.png"/>
                </OverlayTrigger>
                
                <OverlayTrigger placement="top" overlay={stooltip} trigger="click">
                  <img src="images/skype_circle.png"/>
                </OverlayTrigger>

                <OverlayTrigger placement="top" overlay={ftooltip} trigger="click">
                  <img src="images/facebook_circle.png"/>
                </OverlayTrigger>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={6}>

            <form className="cotact-form">
              <Input
                type="text"
                placeholder="Name"
                label="*What's your name?" />
              <Input
                type="textarea"
                rows={4}
                placeholder="Message"
                label="*What's on your mind?" />
              <Input
                type="text"
                placeholder="E-mail address"
                label="*What's your E-mail address?" />
            </form>

          </Col>

        </Row>

        <Row>
          <Col contact-page__button_row mdOffset={6} xs={6}>
            <Button className="contact-page__button_row__message-button" bsStyle="primary" bsSize="large">Send message</Button>
          </Col>
        </Row>
      </div>
    );
  }
});
