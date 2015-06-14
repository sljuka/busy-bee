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
      <Row className="contact-page">

        <Col xs={12} md={6} className="contact-page__circles">
          
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

          <Button className="contact-page__message-button" bsStyle="primary" bsSize="large">Send message</Button>

        </Col>

      </Row>
    );
  }
});
