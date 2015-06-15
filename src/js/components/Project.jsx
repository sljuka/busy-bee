import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({

  render() {
    return (
      <ul className="project-list">
        <li className="project-list__item">
          <Row className="padding-large">
            <Col sm={8} xs={12}>
              <div >
                <h1 className="project-title">Bizflow</h1>
                <p>Bizflow is my master degree project. It's a business process management tool and is consisting of three projects:</p>
                <p><strong>Bizflow Library</strong> (Ruby gem), implements the process management business logic and a DSL for defining process models.</p>
                <p><strong>Bizflow API</strong> (Rails API), makes Bizflow business logic available online as a REST web service.</p>
                <p><strong>Bizflow Front</strong>, a React/Flux javascript client which implements the GUI and communicates with the API.</p>
              </div>
            </Col>
            <Col sm={4} xs={12}>
              <div className="project-btn-panel">
                
                <div className="margin-bottom-small">
                  <Button bsStyle="primary" className="project-sample-button" href="http://sljuka.info/bizflow/" target="_blank">Sample</Button>
                </div>

                <div>
                  <Button href="http://www.github.com/sljuka/bizflow" target="_blank">Github</Button>
                </div>
              </div>
              
            </Col>
          </Row>
        </li>
      </ul>
    );
  }
});
