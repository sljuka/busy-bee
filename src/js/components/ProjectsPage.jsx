import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Project from './Project.jsx';

export default React.createClass({

  render() {
    return (
        <div className="projects-page">
          <Project />
        </div>
    );
  }
});
