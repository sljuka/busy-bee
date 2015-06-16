import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({

  render() {
    return (
      <Row className="about-page">
        <Col xs={8} xsOffset={2} mdOffset={0} md={4} className="about-page__pic padding-bottom-large">
          <img src="images/slika_no_border.png"/>

          <div className="about-page__cv">
            <Button href="files/david_sljukic_CV.pdf" download className="about-page__cv__button" bsStyle="primary" bsSize="large">curriculum vitae</Button>
          </div>
        </Col>

        <Col xs={12} md={8}>   

          <h2 className="about-page__info-title">ABOUT ME</h2>
          <p className="about-page__intro-text">
            I'm a graduated software developer from Novi Sad, Serbia. I enjoy designing, building and maintaining applications.
          </p>

          <p>
            It is very important to me personally and professionally to constantly have an opportunity to learn new things, to be active and creative. From my personal point of view I am outgoing, ambitious, adventurous but patient and tolerant person. I enjoy working alone, but preffer to work in team.
          </p>

          <h2 className="about-page__info-title">WEAPONS OF CHOICE</h2>
          <p><span className="darkBlue">Ruby</span> for web development backend (<span className="darkBlue">Rails</span> and <span className="darkBlue">Sinatra</span>), developing gems and DSLs<br/>
          <span className="darkBlue">Javascript</span> client and server side<br/>
          HTML, CSS including CSS frameworks like <span className="darkBlue">Bootstrap</span> and <span className="darkBlue">Foundation</span><br/>
          Extensive experience with <span className="darkBlue">Java</span>, <span className="darkBlue">C#</span> and currently getting into Erlang<br/>
          <span className="darkBlue">GIT</span> for source code configuration<br/>
          Long time Ubuntu user and experienced with terminal and server configuration</p>

          <h2 className="about-page__info-title">MY STYLE</h2>

          <h3 className="about-page__info-subtitle">Components, components, components...</h3> 
          <p className="about-page__intro-text">
            When building large apps I tend to separate parts of app, define their roles and unit test them separately from the app. So there never should be a large app as a whole, only a large number of communicating parts.
          </p>

          <h3 className="about-page__info-subtitle">Measure twice, cut once</h3>
          <p className="about-page__intro-text">
            I tend to use test driven development for most big solutions, these include unit tests, integration, acceptance tests. It also gives me great pleasure to look at green dots. :)
          </p>

        </Col>
      </Row>
    );
  }
});
