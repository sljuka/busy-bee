import React, {PropTypes} from 'react';
import Navbar from './Navbar.jsx'
import HomePage from './HomePage.jsx'
import AboutPage from './AboutPage.jsx'
import ProjectsPage from './ProjectsPage.jsx'
import ContactPage from './ContactPage.jsx'

export default React.createClass({

  getInitialState() {
    return {
      activePage: "home"
    }
  },

  pageChange(page) {
    this.setState({ activePage: page });
  },

  render() {

    var pages = {
      "home" : <HomePage />,
      "about" : <AboutPage />,
      "projects": <ProjectsPage />,
      "contact": <ContactPage />
    }

    return (
      <div>
        <Navbar activePage={this.state.activePage} pageChange={this.pageChange} />
        {pages[this.state.activePage]}
      </div>
    );
  }
});
