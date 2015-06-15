import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';

export default React.createClass({

  render() {

    var gtooltip = <Tooltip><a href="mailto:david.sljukic@gmail.com" className="contact-link">david.sljukic@gmail.com</a></Tooltip>;
    var stooltip = <Tooltip><b>Skype ID: </b>david.sljukic</Tooltip>;

    return (
        <span className="contact-circles">
          <OverlayTrigger placement="top" overlay={gtooltip} trigger="click">
            <img src="images/g_plus.png"/>
          </OverlayTrigger>
          
          <a href="https://github.com/sljuka" target="_blank">
            <img src="images/ghub.png"/>
          </a>
          
          <OverlayTrigger placement="top" overlay={stooltip} trigger="click">
            <img src="images/s.png"/>
          </OverlayTrigger>
        </span>
    );
  }
});
