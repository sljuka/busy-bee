import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-small-12">
              <p className="welcome-note">
                HELLO! I AM DAVID.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-small-12">
              <p className="welcome-message">
              I am an <span className="green bold">IT engineer.</span> I am looking forward to helping you!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
