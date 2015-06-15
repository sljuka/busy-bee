import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default React.createClass({

  handleClick(e) {
    this.props.pageChange(e.target.text.toLowerCase());
    e.preventDefault();
  },

  render() {

    var logo = <div className="preheader-logo"><span className="white small">DAVID SLJUKIC - </span><span className="blue small">PORTFOLIO</span></div>

    return (
      <Navbar brand={logo} toggleNavKey={0}>
        <Nav right eventKey={0} defaultNavExpended={false}>
          <NavItem eventKey={1} onClick={this.handleClick} className={this.props.activePage == "home" ? "selected" : ""} >HOME</NavItem>
          <NavItem eventKey={2} onClick={this.handleClick} className={this.props.activePage == "about" ? "selected" : ""} >ABOUT</NavItem>
          <NavItem eventKey={3} onClick={this.handleClick} className={this.props.activePage == "projects" ? "selected" : ""} >PROJECTS</NavItem>
          <NavItem eventKey={4} onClick={this.handleClick} className={this.props.activePage == "contact" ? "selected" : ""} >CONTACT</NavItem>
        </Nav>
      </Navbar>
    );
  }
});
