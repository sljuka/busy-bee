import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import FloatingContact from './FloatingContact.jsx';

export default React.createClass({

  render() {

    var gtooltip = <Tooltip><a href="mailto:david.sljukic@gmail.com" className="contact-link">david.sljukic@gmail.com</a></Tooltip>;
    var stooltip = <Tooltip><b>Skype ID: </b>david.sljukic</Tooltip>;
    var ftooltip = <Tooltip>facebook.com/sljukic</Tooltip>;

    return (
      <Row className="contact-page">

        <Col xs={12} className="contact-page__text">
          
          <p className="blue bold contact-page__text__name">David Sljukic</p>

          <p className="contact-page__text__info">email: <a className="blue" href="mailto:david.sljukic@gmail.com">david.sljukic@gmail.com</a></p>

          <p className="contact-page__text__info">github: <a className="blue" href="https://github.com/sljuka">https://github.com/sljuka</a></p>

          <p className="contact-page__text__info">skype: david.sljukic</p>

        </Col>

      </Row>
    );
  }
});
