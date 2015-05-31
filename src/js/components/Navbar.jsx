import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default React.createClass({

  handleClick(e) {
    this.props.pageChange(e.target.text.toLowerCase())
  },

  render() {
    return (
      <Navbar toggleNavKey={0}>
        <Nav justified right eventKey={0} defaultNavExpended={false}>

          <NavItem onClick={this.handleClick} className={this.props.activePage == "home" ? "selected" : ""} >
            HOME
          </NavItem>
          <NavItem onClick={this.handleClick} className={this.props.activePage == "about" ? "selected" : ""} >
            ABOUT
          </NavItem>
          <NavItem onClick={this.handleClick} className={this.props.activePage == "projects" ? "selected" : ""} >
            PROJECTS
          </NavItem>
          <NavItem onClick={this.handleClick} className={this.props.activePage == "contact" ? "selected" : ""} >
            CONTACT
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
});
