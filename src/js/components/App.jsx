import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import TaskList from './TaskList.jsx';

export default React.createClass({
  propTypes: {
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      tasks: []
    }
  },

  render() {
    let {onAddTask, onClear, tasks} = this.props;
    return (
      <div>
        <Navbar>
          <Nav className="nav-justified">
            <NavItem className="selected">
              HOME
            </NavItem>
            <NavItem>
              ABOUT
            </NavItem>
            <NavItem>
              PROJECTS
            </NavItem>
            <NavItem>
              CONTACT
            </NavItem>

          </Nav>
        </Navbar>
        <div className="container">
          <div className="row">
            <div className="col-small-12">
              <p className="welcome-note">
              HELLO! I'M DAVID.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-small-12">
              <p className="welcome-message">
              I'm an <span className="green bold">IT engineer.</span> I'm looking forward to helping you!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
